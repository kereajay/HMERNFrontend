import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import { Usercontext } from "./main";

function App() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(Usercontext);
  useEffect(() => {
    const fecthuser = async () => {
      try {
        const res = await fetch(
          "https://hmernbackend.onrender.com/api/v1/user/patient/details",
          {
            withCredntials: true,
            credentials: "include",
            method: "GET",
            // headers: {
            //   "Content-Type": "application/json",

            // },
          }
        );
        const data = await res.json();
        // console.log(data);
        if (data.success == true) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser({});
        }
      } catch (err) {
        console.log(err);
      }
    };
    fecthuser();
  }, [isAuthenticated]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
