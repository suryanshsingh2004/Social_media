import "./register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleRegister = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate successful registration
    setError("");
    setSuccess("Account created successfully! Redirecting to homepage...");
    
    // Redirect to homepage after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleRegister();
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">SocialMediaMP88</h3>
          <span className="registerDesc">
            Join our community and connect with friends around the world.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <h4 className="registerTitle">Create Account</h4>
            
            <div className="registerNameRow">
              <input
                name="firstName"
                placeholder="First Name"
                className="registerInput registerInputHalf"
                value={formData.firstName}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="registerInput registerInputHalf"
                value={formData.lastName}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="registerInput"
              value={formData.email}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="registerInput"
              value={formData.password}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="registerInput"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />

            {error && <span className="registerError">{error}</span>}
            {success && <span className="registerSuccess">{success}</span>}
            
            <button className="registerButton" onClick={handleRegister}>
              Create Account
            </button>
            
            <div className="registerLoginLink">
              Already have an account? <Link to="/login" className="registerLoginText">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
