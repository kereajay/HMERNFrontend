import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Usercontext } from "../main";

function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Usercontext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    role: "Patient",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    // console.log('Form data submitted:', formData);
    const res = await fetch("https://hmernbackend.onrender.com/api/v1/user/login", {
      withCredntials: true,
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });
    const data = await res.json();
    // console.log(data)

    if (data.success === true) {
      toast.success(data.message, {
        autoClose: 1200,
      });
      setIsAuthenticated(true);
      navigate("/");
    } else {
      toast.error(data.message, {
        autoClose: 1200,
      });
    }
  };
  if (isAuthenticated == true) {
    <Navigate to={"/"} />;
  }

  return (
    <div className="mt-10 ">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold">Login</h1>
      </div>
      <div className="max-w-lg mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirmpassword"
              className="block text-xl font-medium text-gray-700"
            >
              ConfirmPassword
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <p>
              Not Registered /
              <Link to="/signup" className="text-blue-400">
                Signup
              </Link>{" "}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
