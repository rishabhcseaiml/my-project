import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!name.trim()) {
      setError("Please enter a username");
      return;
    }
    setError("");
    login(name);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <div className="input-wrapper">
            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              className={error ? "input-error" : ""}
            />
          </div>
          {error && <span className="error-message">{error}</span>}
        </div>

        <button 
          className="login-btn" 
          onClick={handleLogin}
        >
          <span>Sign In</span>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <div className="login-footer">
          <p>New user? <a href="#signup">Create account</a></p>
        </div>
      </div>

      <div className="background-blur"></div>
    </div>
  );
};

export default Login;