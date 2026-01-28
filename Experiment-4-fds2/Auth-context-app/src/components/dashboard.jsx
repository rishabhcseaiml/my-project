import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { userName, logout } = useContext(AuthContext);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>

      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-left">
            <div className="logo-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                <path d="M12 6v6l4 2.4"></path>
              </svg>
            </div>
            <h1 className="dashboard-title">Dashboard</h1>
          </div>
          <button className="logout-btn" onClick={logout}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </header>

        <main className="dashboard-main">
          <section className="welcome-section">
            <div className="greeting-card">
              <div className="greeting-header">
                <h2>{getGreeting()}</h2>
                <p className="greeting-subtitle">Welcome to your dashboard</p>
              </div>
              <div className="user-avatar">
                <span>{userName.charAt(0).toUpperCase()}</span>
              </div>
            </div>

            <div className="user-info-card">
              <div className="info-item">
                <span className="info-label">Username:</span>
                <span className="info-value">{userName}</span>
              </div>
              <div className="divider"></div>
              <div className="info-item">
                <span className="info-label">Status:</span>
                <span className="status-badge">Active</span>
              </div>
            </div>
          </section>

          <section className="stats-section">
            <h3>Quick Stats</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon stat-icon-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                </div>
                <h4>Tasks</h4>
                <p className="stat-number">12</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon stat-icon-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h4>Messages</h4>
                <p className="stat-number">8</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon stat-icon-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h4>Achievements</h4>
                <p className="stat-number">5</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon stat-icon-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                    <path d="M15.5 9.5l-5.5 5.5-2.5-2.5"></path>
                  </svg>
                </div>
                <h4>Completed</h4>
                <p className="stat-number">94%</p>
              </div>
            </div>
          </section>

          <section className="action-section">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button className="action-btn action-btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 8v-1"></path>
                  <path d="M12 17v1"></path>
                  <path d="M16.66 9.34l.71-.71"></path>
                  <path d="M6.63 17.37l.71-.71"></path>
                  <path d="M17 12h1"></path>
                  <path d="M6 12H5"></path>
                  <path d="M16.66 14.66l.71.71"></path>
                  <path d="M6.63 6.63l.71.71"></path>
                </svg>
                Settings
              </button>
              <button className="action-btn action-btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                Explore
              </button>
              <button className="action-btn action-btn-tertiary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Support
              </button>
            </div>
          </section>
        </main>

        <footer className="dashboard-footer">
          <p>&copy; 2026 Auth Dashboard. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;