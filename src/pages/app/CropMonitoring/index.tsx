import React, { useState } from 'react'
import AppShell from '../../../layouts/AppShell'
import { useFarming } from '../../../context/FarmingContext'
import { RICE_FARMING_STAGES } from '../../../data/farmingWorkflow'
import '../../../styles/CropMonitoring/CropMonitoring.css'

const CropMonitoring: React.FC = () => {
  const { cropCycle, tasks, dailyLogs, notifications, todayDate } = useFarming()
  const [tab, setTab] = useState<number>(0)
  const tabs = ['Growth Stage', 'Observation Logs', 'Notifications']

  const calculateProgress = () => {
    if (!cropCycle) return 0;
    const completedTasks = tasks.filter(t => t.status === 'Completed').length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  const getDaysSincePlanted = () => {
    if (!cropCycle) return 0;
    const start = new Date(cropCycle.startDate);
    const today = new Date(todayDate);
    const diffTime = Math.abs(today.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const currentTask = tasks.find(t => t.status === 'Ongoing');

  return (
    <AppShell pageTitle="Crop Monitoring">
      <section className="page-section">
        <div className="section-heading">
          <h3><i className="fa-solid fa-seedling"></i> Crop Profile</h3>
        </div>
        
        {!cropCycle ? (
           <div className="card" style={{ padding: '32px', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
             <i className="fa-solid fa-leaf" style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--color-border)' }}></i>
             <p>No active crop cycle to monitor.</p>
           </div>
        ) : (
          <>
            <div className="card crop-summary">
              <div className="crop-summary__head">
                <div>
                  <div className="crop-summary__stage">{currentTask?.name || 'Unknown Stage'}</div>
                  <div className="crop-summary__date">Planted {new Date(cropCycle.startDate).toLocaleDateString()} · {cropCycle.variety}</div>
                </div>
                <span className="pill-active">Day {getDaysSincePlanted()}</span>
              </div>
              <div className="progress-track"><div className="progress-fill" style={{ width: `${calculateProgress()}%` }}></div></div>
              <div className="progress-label">
                <span>Growth Progress</span><span>{calculateProgress()}%</span>
              </div>
            </div>

            <div className="tabs">
              {tabs.map((t, idx) => (
                <span key={t} className={idx === tab ? 'active' : ''} onClick={() => setTab(idx)}>{t}</span>
              ))}
            </div>

            {tab === 0 && (
              <div className="stage-timeline">
                {RICE_FARMING_STAGES.map((s) => {
                  const task = tasks.find(t => t.stageId === s.stageId);
                  const status = task?.status === 'Completed' ? 'done' : task?.status === 'Ongoing' ? 'active' : 'upcoming';
                  
                  return (
                    <div key={s.name} className={`stage-item stage-${status}`}>
                      <div className="stage-dot"></div>
                      <div className="stage-meta">
                        <div className="stage-name">{s.name}</div>
                        <div className="stage-days" style={{ fontSize: '11px' }}>
                          {task?.startDate && task?.expectedCompletionDate ? 
                            `${new Date(task.startDate).toLocaleDateString()} - ${new Date(task.expectedCompletionDate).toLocaleDateString()}` 
                            : `${s.durationDays} days`}
                        </div>
                      </div>
                      {status === 'active' && <span className="pill-active-sm">Current</span>}
                    </div>
                  );
                })}
              </div>
            )}

            {tab === 1 && (
              <div className="logs-list">
                {dailyLogs.length === 0 ? (
                  <p style={{ color: 'var(--color-text-secondary)', padding: '20px', textAlign: 'center' }}>No logs recorded yet.</p>
                ) : (
                  dailyLogs.map((l, idx) => (
                    <div className="log-row" key={idx}>
                      <div className="log-date">{new Date(l.date).toLocaleDateString()}</div>
                      <div className="log-body">
                        <div className="log-what"><strong>{l.activityType}:</strong> {l.notes}</div>
                        {l.issues.length > 0 && (
                          <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                            {l.issues.map(i => (
                              <span key={i} className="pill-warn" style={{ fontSize: '10px', padding: '2px 6px' }}>
                                <i className="fa-solid fa-triangle-exclamation"></i> {i}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {tab === 2 && (
              <div className="logs-list">
                {notifications.length === 0 ? (
                  <p style={{ color: 'var(--color-text-secondary)', padding: '20px', textAlign: 'center' }}>No notifications.</p>
                ) : (
                  notifications.map((n, idx) => (
                    <div className="log-row" key={idx}>
                      <div className="log-date">{new Date(n.date).toLocaleDateString()}</div>
                      <div className="log-body">
                        <div className="log-what"><strong>{n.title}:</strong> {n.message}</div>
                        <span className={`pill-${n.type === 'alert' ? 'warn' : n.type === 'success' ? 'active-sm' : 'info'}`} style={{ marginTop: '6px', display: 'inline-block' }}>
                          <i className={`fa-solid ${n.type === 'alert' ? 'fa-triangle-exclamation' : n.type === 'success' ? 'fa-check' : 'fa-circle-info'}`}></i> {n.type}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </section>
    </AppShell>
  )
}

export default CropMonitoring