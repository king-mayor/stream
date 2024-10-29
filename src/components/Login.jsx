import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Login = () => {
  const [login, setLogin] = useState("Sign in");
  return (
    <div className="bg-black h-screen">
      <div className="">
        <div className="py-36 flex justify-center bg-[url('../src/assets/poster4.jpg')] h-screen w-full bg-cover bg-no-repeat bg-center">
          <div className="bg-[#242121] flex flex-col gap-6 p-10 lg:w-1/2 w-full lg:mx-0 mx-10 text-center shadow-md shadow-stone-400">
            <h2 className="text-white text-3xl font-bold">Login</h2>
            <input
              className="border-none outline-none py-2 pl-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-none outline-none py-2 pl-2"
              type="email"
              placeholder="Email or mobile number"
            />
            <input
              className="border-none outline-none py-2 pl-2"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-8 cursor-pointer outline-outline uppercase font-bold border-none outline-none">
              login
            </button>
            <div className="flex gap-4 py-4">
              <p className="text-white lg:text-2xl text-md font-bold">
                No account?
              </p>
              <Link to="/signup">
                <button className="text-white bg-red-600 cursor-pointer font-bold py-1 px-4 uppercase lg:text-xl text-md  hover:bg-red-700">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Footer Section */}
        <div className="bg-black py-10">
          <Footer />
        </div>
        {/* Scroll to top */}
        <div className="">
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default Login;
