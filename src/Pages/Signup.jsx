import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Usercontext } from "../main";

function Signup() {
  const { isAuthenticated, setIsAuthenticated } =useContext(Usercontext) ;
  const navigate=useNavigate();
  const [formdata,setFormdata]=useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    nic: "",
    dob: "",
    gender: "",
    password: "",
    confirmpassword: "",
    role: "Patient",

  })


  const handleChange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }

  // if(isAuthenticated){
  //   navigate('/');
  // }

  const handleSignup=async(e)=>{
    e.preventDefault();
    // console.log(formdata)
    try{
      const res=await fetch("http://localhost:9000/api/v1/user/patient/signup",{
        withCredntials: true,
        credentials: "include",
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formdata)
      })
      const data=await res.json();
      if(data.success===true){
        toast.success(data.message,{
          autoClose:1200
        })
        navigate('/login')
      }
      else{
        toast.error(data.message,{
          autoClose:1500
        })
      }
      // console.log(data)
    }
    catch(err){
      toast.error(data.message)

    }
  }
  return (
    <div className="mt-10 ">
    <div className="text-center mb-10">
      <h1 className="text-2xl font-bold">Signup</h1>
    </div>
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSignup} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label
              htmlFor="firstName"
              className="block text-2xl font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formdata.firstName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="lastName"
              className="block text-2xl font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formdata.lastName}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-2xl font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formdata.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-2xl font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formdata.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="nic"
            className="block text-2xl font-medium text-gray-700"
          >
            NIC
          </label>
          <input
            type="tel"
            name="nic"
            id="nic"
            value={formdata.nic}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-2xl font-medium text-gray-700"
          >
            DOB
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formdata.dob}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block text-2xl font-medium text-gray-700"
          >
            Gender
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={formdata.gender}
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
            value={formdata.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <p>
            Not Registered /
            <Link to="/login" className="text-blue-400">
              Login
            </Link>{" "}
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Signup
        </button>
      </form>
    </div>
  </div>
  );
}

export default Signup;
