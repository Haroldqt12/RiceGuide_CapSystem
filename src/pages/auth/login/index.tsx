import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../../styles/auth/AuthLayout.module.css';
import farmingBg from '../../../assets/img/FarmingBackground.png';
import riceGuideLogo from '../../../assets/img/RiceGuide.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate credentials here if needed
    navigate('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src={farmingBg} alt="Farming Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h1>Welcome to RiceGuide</h1>
            <img src={riceGuideLogo} alt="RiceGuide Logo" className={styles.logo} />
          </div>
          <p className={styles.subtitle}>Sign in your account</p>

          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label>Your Email</label>
              <input type="email" placeholder="" />
            </div>
            <div className={styles.inputGroup}>
              <label>Password</label>
              <div className={styles.passwordInput}>
                <input type={showPassword ? "text" : "password"} placeholder="" />
                <span className={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </span>
              </div>
            </div>

            <div className={styles.forgotPassword}>
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </form>

          <div className={styles.divider}>
            <span>Instant Login</span>
          </div>

          <p className={styles.toggleText}>
            Don't have any Account?{' '}
            <Link to="/register" className={styles.toggleBtn}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
