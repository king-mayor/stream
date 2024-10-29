import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/streamit-logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleToggle = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex items-center lg:justify-around justify-between py-4 bg-black text-gray-200 fixed z-50 left-0 right-0">
      <div className="flex items-center">
        <Link to="/">
          <img className="lg:w-40 h-10 w-28" src={logo} alt="#logo" />
        </Link>
        <div className="lg:flex hidden">
          <Link
            to="/"
            className="text-lg font-bold px-4 text-gray-200 hover:bg-red-600"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="text-lg font-bold px-4 text-gray-200 hover:bg-red-600"
          >
            Movies
          </Link>
          <Link className="text-lg font-bold px-4 text-gray-200 hover:bg-red-600">
            Pages
          </Link>
          <Link
            to="/login"
            className="text-lg font-bold px-4 text-gray-200 hover:bg-red-600"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="lg:flex items-center gap-4 hidden">
        <div>
          <IoSearchCircleOutline className="text-4xl font-bold cursor-pointer text-gray-200" />
        </div>
        <div>
          <HiOutlineBellAlert className="text-4xl font-bold cursor-pointer text-gray-200" />
        </div>
        <div>
          <FaRegUserCircle className="text-4xl font-bold cursor-pointer text-gray-200" />
        </div>
        <div>
          <button className="bg-red-600 text-gray-100 py-2 px-6 cursor-pointer outline-none border-none font-bold rounded-2xl">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* MOBILE SECTION */}
      {menu && (
        <div className="lg:hidden fixed top-16 text-center w-full bg-black py-10">
          <div className="flex flex-col justify-center items-center gap-6 mx-10">
            <Link
              to="/"
              className="text-lg font-bold px-4 py-2 text-white hover:bg-red-600 w-full rounded-lg uppercase"
            >
              Home
            </Link>
            <Link
              to="/movies"
              className="text-xl font-bold px-4 py-2 text-white  hover:bg-red-600 w-full rounded-lg uppercase"
            >
              Movies
            </Link>
            <Link className="text-xl font-bold px-4 py-2 text-white  hover:bg-red-600 w-full rounded-lg uppercase">
              Pages
            </Link>
            <Link
              to="/login"
              className="text-xl font-bold px-4 py-2 text-white  hover:bg-red-600 w-full rounded-lg uppercase"
            >
              Login
            </Link>
          </div>
        </div>
      )}
      <div onClick={handleToggle} className="lg:hidden">
        {menu ? (
          <IoClose className="text-3xl font-bold text-red-600 cursor-pointer" />
        ) : (
          <IoMenu className="text-3xl font-bold text-red-600 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
