import "./login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages

  const handleLogin = () => {
    // Basic validation logic
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Simulate authentication (replace with real logic later)
    if (email === "ss" && password === "123") {
      setError(""); // Clear error
      navigate("/"); // Navigate to the Homepage
    } else {
      setError("Invalid email or password.");
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  // Handle Create Account
  const handleCreateAccount = () => {
    // Navigate to registration page
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMediaMP88</h3>
          <span className="loginDesc">Connect with friends and the world around you.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              onKeyDown={handleKeyDown} // Handle Enter key
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              onKeyDown={handleKeyDown} // Handle Enter key
            />
            {error && <span className="loginError">{error}</span>} {/* Display error message */}
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={handleCreateAccount}>
              Create Account
            </button>
            <div className="loginRegisterLink">
              Don't have an account? <Link to="/register" className="loginRegisterText">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

