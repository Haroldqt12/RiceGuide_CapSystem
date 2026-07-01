import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { CropCycle, FarmingTask, Notification, DailyLog, WeeklyGuide } from '../data/farmingState';
import { RICE_FARMING_STAGES } from '../data/farmingWorkflow';
import { generateWeeklyGuide } from '../data/aiRecommendations';

interface FarmingState {
  cropCycle: CropCycle | null;
  tasks: FarmingTask[];
  notifications: Notification[];
  dailyLogs: DailyLog[];
  todayDate: string;
}

type Action =
  | { type: 'START_CROP_CYCLE'; payload: { cycle: CropCycle; tasks: FarmingTask[]; notifications: Notification[] } }
  | { type: 'COMPLETE_TASK'; payload: { taskId: string; completionDate: string; nextTaskId: string | null; notifications: Notification[] } }
  | { type: 'ADD_DAILY_LOG'; payload: DailyLog }
  | { type: 'MARK_NOTIF_READ'; payload: string }
  | { type: 'SET_TODAY_DATE'; payload: string };

// Load initial state from local storage or use default
const loadInitialState = (): FarmingState => {
  const defaultState: FarmingState = {
    cropCycle: null,
    tasks: [],
    notifications: [],
    dailyLogs: [],
    todayDate: '2026-07-01',
  };
  
  try {
    const saved = localStorage.getItem('riceguide_farming_state');
    if (saved) {
      return { ...defaultState, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error("Failed to load state", e);
  }
  return defaultState;
};

const initialState: FarmingState = loadInitialState();

const farmingReducer = (state: FarmingState, action: Action): FarmingState => {
  let newState: FarmingState;
  
  switch (action.type) {
    case 'START_CROP_CYCLE':
      newState = {
        ...state,
        cropCycle: action.payload.cycle,
        tasks: action.payload.tasks,
        notifications: [...action.payload.notifications, ...state.notifications],
      };
      break;
    case 'COMPLETE_TASK': {
      const updatedTasks = state.tasks.map(t => {
        if (t.id === action.payload.taskId) {
          return { ...t, status: 'Completed' as const, completionDate: action.payload.completionDate };
        }
        if (t.id === action.payload.nextTaskId) {
          return { ...t, status: 'Ongoing' as const };
        }
        return t;
      });
      newState = {
        ...state,
        tasks: updatedTasks,
        notifications: [...action.payload.notifications, ...state.notifications],
      };
      break;
    }
    case 'ADD_DAILY_LOG':
      newState = {
        ...state,
        dailyLogs: [action.payload, ...state.dailyLogs],
      };
      break;
    case 'MARK_NOTIF_READ':
      newState = {
        ...state,
        notifications: state.notifications.map(n => n.id === action.payload ? { ...n, read: true } : n),
      };
      break;
    case 'SET_TODAY_DATE':
      newState = {
        ...state,
        todayDate: action.payload,
      };
      break;
    default:
      return state;
  }
  
  // Save to local storage on every change
  try {
    localStorage.setItem('riceguide_farming_state', JSON.stringify(newState));
  } catch (e) {
    console.error("Failed to save state", e);
  }
  
  return newState;
};

interface FarmingContextType extends FarmingState {
  startNewCropCycle: (data: any) => void;
  completeCurrentTask: (taskId: string, notes?: string) => void;
  canCompleteTask: (taskId: string) => boolean;
  addDailyLog: (log: any) => void;
  markAsRead: (id: string) => void;
  currentTask: FarmingTask | null;
  unreadCount: number;
  getWeeklyGuide: () => WeeklyGuide;
  setTodayDate: (date: string) => void;
  clearData: () => void;
}

const FarmingContext = createContext<FarmingContextType | undefined>(undefined);

export const FarmingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(farmingReducer, initialState);

  const addDays = (dateStr: string, days: number) => {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
  };

  const startNewCropCycle = (data: { variety: string; location: string; area: number; startDate: string }) => {
    const cycle: CropCycle = {
      id: `cycle-${Date.now()}`,
      variety: data.variety,
      location: data.location,
      area: data.area,
      startDate: data.startDate,
      status: 'Active',
    };

    let currentDate = data.startDate;
    const tasks: FarmingTask[] = RICE_FARMING_STAGES.map((stage, idx) => {
      const expectedEnd = addDays(currentDate, stage.durationDays);
      const task: FarmingTask = {
        id: `task-${stage.stageId}`,
        stageId: stage.stageId,
        name: stage.name,
        description: stage.description,
        startDate: currentDate,
        expectedCompletionDate: expectedEnd,
        completionDate: null,
        status: idx === 0 ? 'Ongoing' : 'Pending',
      };
      currentDate = expectedEnd;
      return task;
    });

    const notifications: Notification[] = [
      {
        id: `notif-${Date.now()}`,
        title: 'New Crop Cycle Started',
        message: `Successfully created crop cycle for ${data.variety}.`,
        date: state.todayDate,
        read: false,
        type: 'success',
      },
      {
        id: `notif-${Date.now()+1}`,
        title: 'Task Ready',
        message: `Time to start: ${tasks[0].name}`,
        date: state.todayDate,
        read: false,
        type: 'info',
        link: '/farm-activities'
      }
    ];

    dispatch({ type: 'START_CROP_CYCLE', payload: { cycle, tasks, notifications } });
  };

  const canCompleteTask = (taskId: string) => {
    const task = state.tasks.find(t => t.id === taskId);
    return task?.status === 'Ongoing';
  };

  const completeCurrentTask = (taskId: string, notes?: string) => {
    if (!canCompleteTask(taskId)) return;

    const currentIndex = state.tasks.findIndex(t => t.id === taskId);
    const nextTask = state.tasks[currentIndex + 1];
    
    const notifications: Notification[] = [
      {
        id: `notif-${Date.now()}`,
        title: 'Task Completed',
        message: `You have completed ${state.tasks[currentIndex].name}.`,
        date: state.todayDate,
        read: false,
        type: 'success',
      }
    ];

    if (nextTask) {
      notifications.push({
        id: `notif-${Date.now()+1}`,
        title: 'Next Task Ready',
        message: `Up next: ${nextTask.name}`,
        date: state.todayDate,
        read: false,
        type: 'info',
        link: '/farm-activities'
      });
    } else {
      notifications.push({
        id: `notif-${Date.now()+1}`,
        title: 'Crop Cycle Complete!',
        message: `Congratulations! You have completed all farming stages.`,
        date: state.todayDate,
        read: false,
        type: 'success',
      });
    }

    if (notes) {
      addDailyLog({
        taskId,
        activityType: 'Task Completion',
        notes,
        issues: [],
      });
    }

    dispatch({
      type: 'COMPLETE_TASK',
      payload: {
        taskId,
        completionDate: state.todayDate,
        nextTaskId: nextTask?.id || null,
        notifications,
      }
    });
  };

  const addDailyLog = (logData: { taskId: string; activityType: string; notes: string; issues: string[] }) => {
    dispatch({
      type: 'ADD_DAILY_LOG',
      payload: {
        id: `log-${Date.now()}`,
        date: state.todayDate,
        ...logData,
      }
    });
  };

  const markAsRead = (id: string) => {
    dispatch({ type: 'MARK_NOTIF_READ', payload: id });
  };
  
  const setTodayDate = (date: string) => {
    dispatch({ type: 'SET_TODAY_DATE', payload: date });
  };

  const clearData = () => {
    localStorage.removeItem('riceguide_farming_state');
    window.location.reload();
  };

  const currentTask = state.tasks.find(t => t.status === 'Ongoing') || null;
  const unreadCount = state.notifications.filter(n => !n.read).length;

  const getWeeklyGuideData = () => {
    return generateWeeklyGuide(currentTask, state.todayDate);
  };

  return (
    <FarmingContext.Provider value={{
      ...state,
      startNewCropCycle,
      completeCurrentTask,
      canCompleteTask,
      addDailyLog,
      markAsRead,
      currentTask,
      unreadCount,
      getWeeklyGuide: getWeeklyGuideData,
      setTodayDate,
      clearData
    }}>
      {children}
    </FarmingContext.Provider>
  );
};

export const useFarming = () => {
  const context = useContext(FarmingContext);
  if (context === undefined) {
    throw new Error('useFarming must be used within a FarmingProvider');
  }
  return context;
};
