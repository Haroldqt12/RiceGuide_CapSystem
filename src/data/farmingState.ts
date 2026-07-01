export type TaskStatus = 'Pending' | 'Ongoing' | 'Completed' | 'Missed';

export interface FarmingTask {
  id: string;
  stageId: number;
  name: string;
  description: string;
  startDate: string | null; // ISO Date String
  expectedCompletionDate: string | null; // ISO Date String
  completionDate: string | null; // ISO Date String
  status: TaskStatus;
}

export interface CropCycle {
  id: string;
  variety: string;
  location: string;
  area: number;
  startDate: string; // ISO Date String
  status: 'Active' | 'Completed';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string; // ISO Date String
  read: boolean;
  type: 'info' | 'warning' | 'alert' | 'success';
  link?: string;
}

export interface DailyLog {
  id: string;
  date: string; // ISO Date String
  taskId: string;
  activityType: string;
  notes: string;
  issues: string[];
}

export interface WeeklyGuide {
  week_number: number;
  stage: string;
  generated_at: string;
  tasks: {
    type: 'water' | 'fertilizer' | 'plant' | 'pest' | 'disease' | 'observation' | 'log';
    title: string;
    description: string;
    priority?: 'low' | 'medium' | 'high';
  }[];
  sources: string[];
}
