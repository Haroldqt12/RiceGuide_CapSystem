import React from 'react';
import { useFarming } from '../../context/FarmingContext';
import { useNavigate } from 'react-router-dom';

interface NotificationPanelProps {
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ onClose }) => {
  const { notifications, markAsRead } = useFarming();
  const navigate = useNavigate();

  const handleAction = (id: string, link?: string) => {
    markAsRead(id);
    if (link) {
      navigate(link);
    }
    onClose();
  };

  return (
    <div className="topbar__dropdown topbar__dropdown--notifs" role="menu" style={{ width: '320px', padding: 0 }}>
      <div className="topbar__dropdown-head">
        <div>
          <div className="topbar__dropdown-name">Notifications</div>
          <div className="topbar__dropdown-email">{notifications.filter(n => !n.read).length} unread</div>
        </div>
      </div>
      <div className="notif-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {notifications.length === 0 ? (
          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '13px' }}>
            No notifications yet
          </div>
        ) : (
          notifications.map(n => (
            <div 
              key={n.id} 
              className={`notif-item ${!n.read ? 'notif-unread' : ''}`}
              style={{
                padding: '12px 16px',
                borderBottom: '1px solid var(--color-border)',
                cursor: 'pointer',
                background: n.read ? 'transparent' : 'var(--color-bg)',
                display: 'flex',
                gap: '12px',
                transition: 'background 0.2s ease'
              }}
              onClick={() => handleAction(n.id, n.link)}
            >
              <div style={{
                color: n.type === 'success' ? 'var(--color-primary-700)' : 
                       n.type === 'warning' ? 'var(--color-accent-gold)' : 
                       n.type === 'alert' ? 'var(--color-danger)' : 'var(--color-info)',
                fontSize: '18px',
                marginTop: '2px'
              }}>
                <i className={`fa-solid ${
                  n.type === 'success' ? 'fa-circle-check' : 
                  n.type === 'warning' ? 'fa-triangle-exclamation' : 
                  n.type === 'alert' ? 'fa-bell' : 'fa-circle-info'
                }`}></i>
              </div>
              <div>
                <div style={{ fontWeight: !n.read ? '600' : '500', fontSize: '13px', marginBottom: '4px' }}>{n.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{n.message}</div>
                <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>{n.date}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPanel;
