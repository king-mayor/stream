import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Signup = () => {
  return (
    <div className="bg-neutral-90 h-screen">
      <div className="bg-[url('./src/assets/movie-poster.jpg')] bg-cover bg-no-repeat bg-center h-screen w-full opacity-95">
        <div className="py-36 flex flex-col justify-center items-center mx-10">
          <h1 className="lg:text-6xl text-4xl font-bold text-white">
            Unlimited movies, TV shows, and more
          </h1>
          <h3 className="lg:text-3xl text-2xl font-bold py-4 text-white">
            Starts at ₦2,200. Cancel anytime.
          </h3>
          <h3 className="lg:text-2xl text-lg foont-bold text-white">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="flex flex-row justify-center py-4 gap-2 w-full">
            <input
              className="border-none py-2 pl-2 outline-2 outline-red-900"
              type="email"
            />
            <button className="text-white bg-red-600 hover:bg-red-800 py-1 px-6 font-bold cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
        {/* Footer Section */}
        <div className="bg-black py-10">
          <Footer />
        </div>
        {/* Scroll to top */}
        <div>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default Signup;
