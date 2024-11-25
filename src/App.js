// import Home from "./pages/home/Home";
// // import Login from "./pages/login/Login.jsx";
// import Profile from "./pages/profile/Profile.jsx";
// function App() {
//   return <Profile/>
// }
// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Topbar from "./components/topbar/Topbar"; // Adjust path as needed
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

export default function App() {
  return (
    <Router>
      {/* <Topbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
