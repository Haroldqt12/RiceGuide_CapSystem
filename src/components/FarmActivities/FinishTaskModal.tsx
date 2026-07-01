import React, { useState } from 'react';
import { useFarming } from '../../context/FarmingContext';

interface Props {
  taskId: string;
  taskName: string;
  onClose: () => void;
}

export const FinishTaskModal: React.FC<Props> = ({ taskId, taskName, onClose }) => {
  const { completeCurrentTask, todayDate } = useFarming();
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    completeCurrentTask(taskId, notes);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={backdropStyle}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={contentStyle}>
        <div style={headerStyle}>
          <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-check-circle" style={{ color: 'var(--color-primary-500)' }}></i> Complete Task
          </h3>
          <button onClick={onClose} style={closeBtnStyle}><i className="fa-solid fa-xmark"></i></button>
        </div>
        
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px', fontSize: '14px', lineHeight: 1.5 }}>
            You are about to mark <strong>{taskName}</strong> as completed on <strong>{todayDate}</strong>.
            The system will automatically log this and activate the next farming stage.
          </div>

          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Completion Notes (Optional)</label>
            <textarea 
              rows={3} 
              value={notes} 
              onChange={e => setNotes(e.target.value)} 
              placeholder="Any observations or issues encountered?" 
              style={inputStyle} 
            />
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button type="button" onClick={onClose} className="btn-ghost" style={{ padding: '8px 16px', borderRadius: 'var(--radius-btn)' }}>Cancel</button>
            <button type="submit" className="btn-primary" style={{ padding: '8px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Confirm Completion
            </button>
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
  backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', width: '90%', maxWidth: '450px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
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
