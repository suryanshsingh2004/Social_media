// // import "./login.css"
// // export default function Login() {
// //     return(
// //         <div className="login">
// //             <div className="loginWrapper">
// //                 <div className="loginLeft">
// //                     <h3 className="loginLogo">SocialMediaMP88</h3>
// //                     <span className="loginDesc">Connect with friends and the world around you.</span>
// //                 </div>
// //                 <div className="loginRight">
// //                     <div className="loginBox">
// //                         <input placeholder="Email" className="loginInput"/>
// //                         <input placeholder="Password" className="loginInput"/>
// //                         <button className="loginButton">Log In</button>
// //                         <span className="loginForgot">Forgot Password?</span>
// //                         {/* <button className="loginRegisterButton">Create a New Password</button> */}

// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }
// import "./login.css";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleLogin = () => {
//     // Perform login validation or authentication logic here if needed
//     navigate("/profile"); // Navigate to the Profile page
//   };

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h3 className="loginLogo">SocialMediaMP88</h3>
//           <span className="loginDesc">Connect with friends and the world around you.</span>
//         </div>
//         <div className="loginRight">
//           <div className="loginBox">
//             <input placeholder="Email" className="loginInput" />
//             <input placeholder="Password" className="loginInput" />
//             <button className="loginButton" onClick={handleLogin}>Log In</button>
//             <span className="loginForgot">Forgot Password?</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/profile"); // Navigate to the Profile page
    } else {
      setError("Invalid email or password.");
    }
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
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            {error && <span className="loginError">{error}</span>} {/* Display error message */}
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

