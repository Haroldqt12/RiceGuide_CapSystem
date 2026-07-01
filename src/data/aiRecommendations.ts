import type { FarmingTask, WeeklyGuide } from './farmingState';
import { RICE_FARMING_STAGES } from './farmingWorkflow';
import { getWeatherData } from './weatherData';

export const generateWeeklyGuide = (currentTask: FarmingTask | null, dateStr: string): WeeklyGuide => {
  if (!currentTask) {
    return {
      week_number: 0,
      stage: 'No Active Crop',
      generated_at: dateStr,
      tasks: [
        { type: 'log', title: 'Start new crop cycle', description: 'Create a new crop cycle to receive AI recommendations.', priority: 'high' }
      ],
      sources: ['RiceGuide System']
    };
  }

  const stage = RICE_FARMING_STAGES.find(s => s.stageId === currentTask.stageId);
  const weather = getWeatherData(dateStr);
  
  const tasks: WeeklyGuide['tasks'] = [];
  
  if (stage) {
    // Add tasks from current stage instructions
    stage.instructions.slice(0, 2).forEach((inst, idx) => {
      tasks.push({
        type: idx === 0 ? 'observation' : 'log',
        title: `Step ${inst.step}: ${stage.name}`,
        description: inst.text,
        priority: 'medium'
      });
    });

    // Add risk task
    if (stage.risks && stage.risks.length > 0) {
      tasks.push({
        type: 'pest',
        title: 'Risk Alert',
        description: `Watch out for: ${stage.risks[0]}. ${stage.tips[0]}`,
        priority: 'high'
      });
    }
    
    // Add weather advisory if rain is heavy
    if (weather && weather.rain > 50) {
      tasks.push({
        type: 'water',
        title: 'Weather Advisory',
        description: `Heavy rain expected (${weather.rain}% chance). ${stage.weatherConsiderations}`,
        priority: 'high'
      });
    } else if (stage.weatherConsiderations) {
      tasks.push({
        type: 'observation',
        title: 'Weather Tips',
        description: stage.weatherConsiderations,
        priority: 'low'
      });
    }
  }

  return {
    // Calculate week number based on rough stage progression (13 stages ~ 16 weeks)
    week_number: Math.max(1, Math.ceil(currentTask.stageId * 1.2)),
    stage: stage?.name || 'Unknown',
    generated_at: dateStr,
    tasks,
    sources: ['PhilRice Crop Management Guide', 'DA-Region Field Advisory', 'RiceGuide AI']
  };
};

export const generateAiInsights = (currentTask: FarmingTask | null, dateStr: string) => {
  if (!currentTask) return [];

  const stage = RICE_FARMING_STAGES.find(s => s.stageId === currentTask.stageId);
  const weather = getWeatherData(dateStr);
  
  const insights = [];

  if (weather && weather.rain > 50) {
    insights.push({ icon: 'fa-solid fa-triangle-exclamation', title: 'Weather Alert', desc: `Heavy rain expected. ${stage?.weatherConsiderations || 'Ensure proper drainage.'}` });
  }

  if (stage) {
    if (stage.name.includes('Irrigation') || currentTask.stageId > 5) {
      insights.push({ icon: 'fa-solid fa-droplet', title: 'Irrigation Advisory', desc: 'Maintain 2-3 cm standing water. ' + stage.tips[0] });
    }
    if (stage.name.includes('Fertilizer')) {
      insights.push({ icon: 'fa-solid fa-flask', title: 'Fertilizer Recommendation', desc: stage.instructions[1]?.text || 'Apply fertilizer as scheduled.' });
    }
    if (stage.risks.length > 0) {
      insights.push({ icon: 'fa-solid fa-bug', title: 'Pest/Risk Alert', desc: `Risk of ${stage.risks[0]}. Continue monitoring.` });
    }
  }

  // Fallback insights if few
  if (insights.length < 3) {
    insights.push({ icon: 'fa-solid fa-leaf', title: 'Crop Health', desc: 'Crop is progressing as expected. Keep up the good work.' });
  }

  return insights;
};
