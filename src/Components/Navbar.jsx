import React, { useState, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSunnySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Usercontext } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
// import ajay from '../../assets/Images/ajay.png'

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Usercontext);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handletheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handlelogout = async () => {
    const res = await fetch(
      "https://hmernbackend.onrender.com/api/v1/user/patientlogout",
      {
        withCredntials: true,
        credentials: "include",
        method: "GET",
        // credentials: 'include',
      }
    );
    const data = await res.json();
    if (data.success == false) {
      toast.error(data.message, {
        autoClose: 1200,
      });
    } else {
      toast.success(data.message, {
        autoClose: 1200,
      });
      setIsAuthenticated(false);
      navigate("/login");
    }
  };
  // if(isAuthenticated!==true){
  //   navigate("/login")
  // }

  const handlelogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="lg:flex md:hidden sm:hidden  px-4  py-2 text-grey-500 dark:bg-black dark:text-white items-center justify-between">
        <div className="flex gap-4 items-center ">
          {/* <img src={ajay} alt="" width={50}  className='rounded-full'/> */}
          <h1 className="text-3xl  px-4 py-1 flex items-center gap-2 text-blue-500">
            AJCARE
            <span>
              <img
                src="https://hospitalmanagementsystem.org/images/hospital-management-system-logo-dark.png"
                alt=""
                className="w-36"
              />
            </span>{" "}
          </h1>
        </div>
        {isAuthenticated && (
          <ul
            type="none"
            className="flex flex-row gap-8 justify-center m-auto  px-4 py-3 items-center text-xl font-bold text-blue-400 "
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/about">AboutUs</Link>
            </li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        )}

        <div className="px-4 flex flex-row items-center gap-5 justify-end">
          <p onClick={handletheme}>
            <IoSunnySharp />
          </p>
          {isAuthenticated === true ? (
            <button
              className="text-xl font-semibold bg-blue-400 py-1 px-2 rounded-2xl text-white"
              onClick={handlelogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="text-xl font-semibold bg-blue-400 py-1 px-2 rounded-2xl text-white"
              onClick={handlelogin}
            >
              Login
            </button>
          )}
          <Link to="https://hmern-dashboard.vercel.app/">
            {" "}
            <button className="text-xl font-semibold bg-blue-400 py-1 px-2 rounded-2xl text-white">
              Admin
            </button>
          </Link>
        </div>
      </div>
      <div className="text-3xl lg:hidden md:visible sm:visible dark:bg-black text-blue-500 p-2">
        <GiHamburgerMenu onClick={() => setOpen(!open)} />
      </div>
      {open && (
        <div>
          <ul
            type="none"
            className=" lg:hidden flex flex-col gap-8 dark:bg-black py-4 px-4 text-lg font-semibold  text-blue-400"
          >
            <li className="text-3xl   py-1 ">AJCARE</li>

            {isAuthenticated && (
              <ul>
                {" "}
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/appointment">Appointment</Link>
                </li>
                <li>
                  <Link to="/about">AboutUs</Link>
                </li>
                <li onClick={handletheme}>
                  <IoSunnySharp />
                </li>{" "}
              </ul>
            )}

            {isAuthenticated === true ? (
              <button
                className="text-xl font-semibold bg-blue-500 py-1 px-2 rounded-2xl text-white "
                onClick={handlelogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="text-xl font-semibold bg-blue-500 py-1 px-2 rounded-2xl text-white w-28"
                onClick={handlelogin}
              >
                Login
              </button>
            )}
            <Link to="https://hmern-dashboard.vercel.app/">
              {" "}
              <button className="text-xl font-semibold bg-blue-500 py-1 px-2 rounded-2xl text-white w-28">
                Admin
              </button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
