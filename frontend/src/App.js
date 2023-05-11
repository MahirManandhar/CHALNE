// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar1 from "./Components/Navbar";
import Navbar2 from "./Components/afterLoginNavbar";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
// import axios from 'axios';

import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginHome from "./Components/LoginHome";
// import ProfileScreen from "./Components/ProfileScreen";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [currentForm, setCurrentForm] = useState(
    localStorage.getItem("isLoggedIn")
      ? localStorage.getItem("isLoggedIn")
      : "home"
  );
  const toggleForm = (forName) => {
    setCurrentForm(forName);
    localStorage.setItem("isLoggedIn", forName);
    // When user logs out
    // setCurrentForm("home");
    // localStorage.removeItem("isLoggedIn");
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [modal,setmodal] = useState(false)
  return (
    <>
    <LoginHome/>
      <div>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <Router>
          {currentForm === "home" ? (
            <Navbar1 mode={mode} toggleMode={toggleMode} setmodal={setmodal} />
          ) : (
            <Navbar2 mode={mode} toggleMode={toggleMode} />
          )}

          <Routes>
            <Route path="/" element={<Home modal={modal} setmodal={setmodal}/>} />
            <Route path="/Home" element={<Home modal={modal} setmodal={setmodal}/>} />
            <Route
              path="/Login"
              element={<Login onFormSwitch={toggleForm} modal={modal} setmodal={setmodal} />}
            />
            <Route path="/About" element={<About />} />
            <Route path="/Register" element={<Register modal={modal} setmodal={setmodal} />} />
            {/* <Route path="/ProfileScreen" element={<ProfileScreen />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
