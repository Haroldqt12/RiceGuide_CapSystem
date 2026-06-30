import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="profile-page" style={{ minHeight: '100vh', background: 'var(--color-bg)', padding: '24px' }}>
      <div className="profile-card" style={{
        maxWidth: 480,
        margin: '40px auto',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-card)',
        boxShadow: 'var(--shadow-card)',
        padding: 28,
        textAlign: 'center',
      }}>
        <img
          src="https://i.pravatar.cc/120?img=47"
          alt="Juan Dela Cruz"
          style={{ width: 96, height: 96, borderRadius: '50%', margin: '0 auto 16px', display: 'block' }}
        />
        <h1 style={{ fontSize: 20, margin: '0 0 4px' }}>Juan Dela Cruz</h1>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: 13 }}>Farm Manager</p>
        <p style={{ margin: '6px 0 24px', color: 'var(--color-text-secondary)', fontSize: 12 }}>
          juan.delacruz@riceguide.ph
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left' }}>
          <div className="profile-row"><strong>Role:</strong> Farm Manager</div>
          <div className="profile-row"><strong>Location:</strong> Brgy. San Isidro, Nueva Ecija</div>
          <div className="profile-row"><strong>Farm Area:</strong> 25.6 ha</div>
          <div className="profile-row"><strong>Member since:</strong> May 2026</div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="btn-primary"
          style={{ marginTop: 24 }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Dashboard
        </button>
      </div>
    </div>
  )
}

export default Profile