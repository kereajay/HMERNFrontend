import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 p-2  py-10 dark:text-gray-400">
      <div>
        <img
          src="https://hospitalmanagementsystem.org/images/hospital-management-system-logo-dark.png"
          alt=""
          className="w-96"
        />
      </div>
      <div className="items-center">
        <h1 className="text-3xl font-semibold text-gray-500 ">Quick Links</h1>
        <br />
        <hr className="border-4" />

        <ul type="none" className=" text-lg text-gray-500 font-semibold">
          <Link to={"/"}>
            <li className="mt-1">Home</li>
          </Link>
          <Link to={"/appointment"}>
            <li className="mt-1">Appointment</li>
          </Link>
          <Link to={"/about"}>
            <li className="mt-1">AboutUs</li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-500 ">Hours</h1>
        <br />
        <hr className="border-4" />

        {hours.map((item) => {
          return (
            <>
              <li key={item.id} className="mt-1 flex gap-2">
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            </>
          );
        })}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-500 ">Contact</h1>
        <br />
        <hr className="border-4" />

        <div className="mt-1">
          <ul type="none">
            <li className="text-2xl mt-3 flex gap-3 items-center">
              <FaPhoneAlt className="" /> <span>9999999999</span>
            </li>
            <li className="text-2xl mt-3 flex gap-3 items-center">
              <IoMail />
              <span>Ajcare@gmail.com</span>
            </li>
            <li className="text-2xl mt-3 flex gap-3 items-center">
              <FaAddressCard />
              <span>KRPuram Bengaluru</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
