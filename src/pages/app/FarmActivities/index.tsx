import React, { useState } from 'react'
import AppShell from '../../../layouts/AppShell'
import { NewCropCycleModal } from '../../../components/FarmActivities/NewCropCycleModal'
import { FinishTaskModal } from '../../../components/FarmActivities/FinishTaskModal'
import { DailyLogModal } from '../../../components/Dashboard/DailyLogModal'
import { useFarming } from '../../../context/FarmingContext'
import { getWeatherData } from '../../../data/weatherData'
import { RICE_FARMING_STAGES } from '../../../data/farmingWorkflow'
import '../../../styles/FarmActivities/FarmActivities.css'

const FarmActivities: React.FC = () => {
  const { cropCycle, tasks, dailyLogs, currentTask, todayDate } = useFarming()
  
  const [tab, setTab] = useState<number>(0)
  const tabs = ['Farming Timeline', 'Current Task Detail', 'Activity History']

  const [newCycleModal, setNewCycleModal] = useState(false)
  const [finishModal, setFinishModal] = useState(false)
  const [logModal, setLogModal] = useState(false)

  const weather = getWeatherData(todayDate)

  if (!cropCycle) {
    return (
      <AppShell pageTitle="Farm Activities">
        <section className="page-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', minHeight: '60vh', textAlign: 'center' }}>
          <i className="fa-solid fa-seedling" style={{ fontSize: '64px', color: 'var(--color-primary-500)', marginBottom: '24px' }}></i>
          <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Start Your Farming Journey</h2>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '500px', marginBottom: '32px', lineHeight: 1.6 }}>
            Create a new crop cycle to generate your personalized AI-driven farming timeline, get daily recommendations, and track your progress from land preparation to harvest.
          </p>
          <button className="btn-primary" style={{ padding: '12px 32px', fontSize: '16px' }} onClick={() => setNewCycleModal(true)}>
            <i className="fa-solid fa-plus"></i> Start New Crop Cycle
          </button>
        </section>
        {newCycleModal && <NewCropCycleModal onClose={() => setNewCycleModal(false)} />}
      </AppShell>
    )
  }

  return (
    <AppShell pageTitle="Farm Activities">
      <section className="page-section flex flex-col gap-6">
        <div className="section-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <h3><i className="fa-solid fa-list-check"></i> Farming Workflow</h3>
          <div className="pill-active" style={{ fontSize: '14px', padding: '6px 16px' }}>
            {cropCycle.variety} · {cropCycle.location}
          </div>
        </div>

        <div className="tabs">
          {tabs.map((t, idx) => (
            <span key={t} className={idx === tab ? 'active' : ''} onClick={() => setTab(idx)}>{t}</span>
          ))}
        </div>

        {/* TAB 0: TIMELINE */}
        {tab === 0 && (
          <div className="card" style={{ padding: '24px' }}>
            <div className="vertical-timeline">
              {tasks.map((task, idx) => {
                const isCurrent = task.status === 'Ongoing';
                const isDone = task.status === 'Completed';
                const isMissed = task.status === 'Missed';
                
                let icon = 'fa-circle-dot';
                let colorClass = 'timeline-future';
                if (isDone) { icon = 'fa-check-circle'; colorClass = 'timeline-done'; }
                if (isCurrent) { icon = 'fa-play-circle'; colorClass = 'timeline-active'; }
                if (isMissed) { icon = 'fa-times-circle'; colorClass = 'timeline-missed'; }

                return (
                  <div key={task.id} className={`timeline-item ${colorClass}`}>
                    <div className="timeline-icon"><i className={`fa-solid ${icon}`}></i></div>
                    <div className="timeline-content card" style={{ padding: isCurrent ? '20px' : '16px', background: isCurrent ? 'rgba(74, 155, 40, 0.05)' : 'var(--color-surface)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                        <div>
                          <h4 style={{ margin: '0 0 4px 0', fontSize: isCurrent ? '18px' : '16px' }}>
                            {idx + 1}. {task.name}
                          </h4>
                          <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            {isDone ? `Completed on ${new Date(task.completionDate!).toLocaleDateString()}` 
                                    : `${new Date(task.startDate!).toLocaleDateString()} to ${new Date(task.expectedCompletionDate!).toLocaleDateString()}`}
                          </div>
                        </div>
                        <span className={`pill-${isDone ? 'active-sm' : isCurrent ? 'info' : isMissed ? 'warn' : 'secondary'}`}>
                          {task.status}
                        </span>
                      </div>
                      
                      {isCurrent && (
                        <div style={{ marginTop: '16px', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                          <p style={{ fontSize: '14px', margin: '0 0 16px 0' }}>{task.description}</p>
                          <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="btn-primary" onClick={() => setTab(1)}>View Details</button>
                            <button className="btn-ghost" onClick={() => setFinishModal(true)}><i className="fa-solid fa-check"></i> Finish Task</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 1: CURRENT TASK DETAIL */}
        {tab === 1 && (
          <div className="card" style={{ padding: '24px' }}>
            {currentTask ? (
              <div className="task-detail-grid">
                <div className="task-main">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '24px', margin: 0 }}>{currentTask.name}</h3>
                    <span className="pill-info">Ongoing</span>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
                    {currentTask.description}
                  </p>
                  
                  <h4 style={{ marginBottom: '12px', color: 'var(--color-primary-700)' }}><i className="fa-solid fa-list-ol"></i> Step-by-step Instructions</h4>
                  <div className="instructions-list" style={{ marginBottom: '32px' }}>
                    {RICE_FARMING_STAGES.find((s:any) => s.stageId === currentTask.stageId)?.instructions.map((inst: any) => (
                      <div key={inst.step} style={{ display: 'flex', gap: '12px', marginBottom: '12px', padding: '12px', background: 'var(--color-bg)', borderRadius: 'var(--radius-btn)' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-primary-500)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', flexShrink: 0 }}>
                          {inst.step}
                        </div>
                        <div style={{ fontSize: '14px', lineHeight: 1.5 }}>{inst.text}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <button className="btn-primary" onClick={() => setFinishModal(true)} style={{ padding: '12px 24px', fontSize: '16px' }}>
                      <i className="fa-solid fa-check-circle"></i> Mark Task Completed
                    </button>
                    <button className="btn-ghost" onClick={() => setLogModal(true)}>
                      <i className="fa-solid fa-plus"></i> Add Observation Log
                    </button>
                  </div>
                </div>

                <div className="task-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="card" style={{ padding: '20px', background: 'var(--color-bg)' }}>
                    <h5 style={{ margin: '0 0 12px 0', color: 'var(--color-text)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <i className="fa-regular fa-calendar"></i> Schedule
                    </h5>
                    <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Started:</span>
                        <strong>{new Date(currentTask.startDate!).toLocaleDateString()}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--color-text-secondary)' }}>Expected End:</span>
                        <strong>{new Date(currentTask.expectedCompletionDate!).toLocaleDateString()}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="card" style={{ padding: '20px', background: 'var(--color-bg)' }}>
                    <h5 style={{ margin: '0 0 12px 0', color: 'var(--color-text)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <i className="fa-solid fa-lightbulb" style={{ color: 'var(--color-accent-gold)' }}></i> AI Farming Tips
                    </h5>
                    {RICE_FARMING_STAGES.find((s:any) => s.stageId === currentTask.stageId)?.tips.map((tip: string, i: number) => (
                      <p key={i} style={{ fontSize: '13px', margin: '0 0 8px 0', lineHeight: 1.5 }}>{tip}</p>
                    ))}
                  </div>

                  {weather && weather.rain > 50 && (
                    <div className="card" style={{ padding: '20px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                      <h5 style={{ margin: '0 0 12px 0', color: 'var(--color-danger)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <i className="fa-solid fa-cloud-rain"></i> Weather Consideration
                      </h5>
                      <p style={{ fontSize: '13px', margin: 0, color: 'var(--color-text)', lineHeight: 1.5 }}>
                        {RICE_FARMING_STAGES.find((s:any) => s.stageId === currentTask.stageId)?.weatherConsiderations}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <i className="fa-solid fa-check-circle" style={{ fontSize: '48px', color: 'var(--color-primary-500)', marginBottom: '16px' }}></i>
                <h3>All tasks completed!</h3>
                <p>Congratulations, your crop cycle is fully complete.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: HISTORY */}
        {tab === 2 && (
          <div className="card" style={{ padding: '24px' }}>
            <h4 style={{ marginBottom: '20px' }}>Completed Activities</h4>
            {tasks.filter(t => t.status === 'Completed').length === 0 ? (
              <p style={{ color: 'var(--color-text-secondary)' }}>No tasks completed yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {tasks.filter(t => t.status === 'Completed').reverse().map(task => (
                  <div key={task.id} style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong style={{ fontSize: '16px' }}>{task.name}</strong>
                      <span className="pill-active-sm">Completed</span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                      Completed on {new Date(task.completionDate!).toLocaleDateString()}
                    </div>
                    {dailyLogs.filter(l => l.taskId === task.id).map(log => (
                      <div key={log.id} style={{ padding: '8px 12px', background: 'var(--color-bg)', borderRadius: '4px', fontSize: '13px', marginTop: '8px' }}>
                        <strong>{log.activityType}:</strong> {log.notes}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </section>

      {newCycleModal && <NewCropCycleModal onClose={() => setNewCycleModal(false)} />}
      {finishModal && currentTask && <FinishTaskModal taskId={currentTask.id} taskName={currentTask.name} onClose={() => setFinishModal(false)} />}
      {logModal && <DailyLogModal onClose={() => setLogModal(false)} />}
    </AppShell>
  )
}

export default FarmActivities