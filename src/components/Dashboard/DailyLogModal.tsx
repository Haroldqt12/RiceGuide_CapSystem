import React, { useState } from 'react';
import { useFarming } from '../../context/FarmingContext';

interface Props {
  onClose: () => void;
}

const ISSUES = [
  'Yellowing',
  'Pest sighting',
  'Lodging',
  'Discoloration',
  'Water stress',
  'None',
]

export const DailyLogModal: React.FC<Props> = ({ onClose }) => {
  const { addDailyLog, currentTask, todayDate } = useFarming();
  
  const [activityType, setActivityType] = useState('Observation');
  const [notes, setNotes] = useState('');
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);

  const toggleIssue = (issue: string) => {
    setSelectedIssues((prev) =>
      prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDailyLog({
      taskId: currentTask?.id || 'manual',
      activityType,
      notes,
      issues: selectedIssues
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={backdropStyle}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={contentStyle}>
        <div style={headerStyle}>
          <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-clipboard-list" style={{ color: 'var(--color-info)' }}></i> Add Daily Log
          </h3>
          <button onClick={onClose} style={closeBtnStyle}><i className="fa-solid fa-xmark"></i></button>
        </div>
        
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Date & Context</label>
            <div style={{ padding: '8px 12px', background: 'var(--color-bg)', borderRadius: 'var(--radius-btn)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              <div><strong>Date:</strong> {todayDate}</div>
              <div><strong>Current Stage:</strong> {currentTask?.name || 'No Active Crop'}</div>
            </div>
          </div>

          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Activity Type</label>
            <select value={activityType} onChange={e => setActivityType(e.target.value)} style={inputStyle}>
              <option value="Observation">Observation</option>
              <option value="Irrigation">Irrigation Check</option>
              <option value="Fertilizer">Fertilizer Application</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Notes / Description</label>
            <textarea 
              rows={3} 
              value={notes} 
              onChange={e => setNotes(e.target.value)} 
              placeholder="What did you do or observe today?" 
              style={inputStyle} 
              required
            />
          </div>
          
          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Observed Issues</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {ISSUES.map((i) => (
                <label key={i} style={{ 
                  padding: '6px 12px', 
                  borderRadius: 'var(--radius-pill)', 
                  fontSize: '12px',
                  background: selectedIssues.includes(i) ? 'var(--color-primary-700)' : 'var(--color-bg)',
                  color: selectedIssues.includes(i) ? 'white' : 'inherit',
                  border: `1px solid ${selectedIssues.includes(i) ? 'var(--color-primary-700)' : 'var(--color-border)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                  <input
                    type="checkbox"
                    checked={selectedIssues.includes(i)}
                    onChange={() => toggleIssue(i)}
                    style={{ display: 'none' }}
                  />
                  {i}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button type="button" onClick={onClose} className="btn-ghost" style={{ padding: '8px 16px', borderRadius: 'var(--radius-btn)' }}>Cancel</button>
            <button type="submit" className="btn-primary" style={{ padding: '8px 20px' }}>Save Log</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const backdropStyle: React.CSSProperties = {
  position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'
};
const contentStyle: React.CSSProperties = {
  backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', width: '90%', maxWidth: '500px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
};
const headerStyle: React.CSSProperties = {
  padding: '16px 20px', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--color-bg)', borderTopLeftRadius: 'var(--radius-card)', borderTopRightRadius: 'var(--radius-card)'
};
const closeBtnStyle: React.CSSProperties = {
  background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: 'var(--color-text-secondary)'
};
const rowStyle: React.CSSProperties = { marginBottom: '16px' };
const labelStyle: React.CSSProperties = { display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600 };
const inputStyle: React.CSSProperties = { width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-btn)', border: '1px solid var(--color-border)', fontSize: '14px', fontFamily: 'inherit' };
