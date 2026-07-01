import React, { useState } from 'react';
import { useFarming } from '../../context/FarmingContext';
import { useNavigate } from 'react-router-dom';

interface Props {
  onClose: () => void;
}

export const NewCropCycleModal: React.FC<Props> = ({ onClose }) => {
  const { startNewCropCycle, todayDate } = useFarming();
  const navigate = useNavigate();
  
  const [variety, setVariety] = useState('NSIC Rc222');
  const [location, setLocation] = useState('Field 1A');
  const [area, setArea] = useState(2.5);
  const [startDate, setStartDate] = useState(todayDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startNewCropCycle({ variety, location, area, startDate });
    onClose();
    navigate('/farm-activities');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} style={backdropStyle}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={contentStyle}>
        <div style={headerStyle}>
          <h3 style={{ margin: 0, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-seedling"></i> Start New Crop Cycle
          </h3>
          <button onClick={onClose} style={closeBtnStyle}><i className="fa-solid fa-xmark"></i></button>
        </div>
        
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Rice Variety</label>
            <select value={variety} onChange={e => setVariety(e.target.value)} style={inputStyle}>
              <option value="NSIC Rc222">NSIC Rc222</option>
              <option value="NSIC Rc160">NSIC Rc160</option>
              <option value="PSB Rc82">PSB Rc82</option>
            </select>
          </div>
          
          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Farm Location</label>
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} required style={inputStyle} />
          </div>

          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Farm Area (hectares)</label>
            <input type="number" step="0.1" value={area} onChange={e => setArea(Number(e.target.value))} required style={inputStyle} />
          </div>

          <div className="form-row" style={rowStyle}>
            <label style={labelStyle}>Start Date</label>
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required style={inputStyle} />
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button type="button" onClick={onClose} className="btn-ghost" style={{ padding: '8px 16px', borderRadius: 'var(--radius-btn)' }}>Cancel</button>
            <button type="submit" className="btn-primary" style={{ padding: '8px 20px' }}>Create Timeline</button>
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
const inputStyle: React.CSSProperties = { width: '100%', padding: '10px 12px', borderRadius: 'var(--radius-btn)', border: '1px solid var(--color-border)', fontSize: '14px' };
