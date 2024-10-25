import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import appstore from "../assets/apple-app.png";
import googleplay from "../assets/google-play.png";
const Footer = () => {
  return (
    <div>
      <div className="flex lg:justify-around lg:flex-row flex-col my-4 lg:mx-0 mx-10">
        <div className="1st lg:w-1/2 w-full">
          <div className="flex lg:flex-row flex-col gap-4">
            <h2 className="text-white lg:text-lg text-sm font-bold">
              Terms of Use
            </h2>
            <h2 className="text-white lg:text-lg text-sm font-bold">
              Privacy-Policy
            </h2>
            <h2 className="text-white lg:text-lg text-sm font-bold">Blog</h2>
            <h2 className="text-white lg:text-lg text-sm font-bold">FAQ</h2>
            <h2 className="text-white lg:text-lg text-sm font-bold">
              Watch List
            </h2>
          </div>
          <div>
            <p className="text-white lg:text-md text-sm my-4">
              © 2024 STREAMIT. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Streamit Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </p>
          </div>
        </div>
        <div className="2nd">
          <h2 className="text-lg text-white font-bold">Follow us</h2>
          <div className="flex my-4 gap-4">
            <h2>
              <FaFacebook className="text-3xl text-white cursor-pointer hover:text-red-600" />
            </h2>
            <h2>
              <FaTwitterSquare className="text-3xl text-white cursor-pointer hover:text-red-600" />
            </h2>
            <h2>
              <FaGithub className="text-3xl text-white cursor-pointer hover:text-red-600" />
            </h2>
            <h2>
              <FaInstagram className="text-3xl text-white cursor-pointer hover:text-red-600" />
            </h2>
          </div>
        </div>
        <div className="3rd">
          <h2 className="text-xl text-white font-bold capitalize">
            streamit app
          </h2>
          <div className="flex items-center gap-6 my-4">
            <div className="flex items-center gap-2">
              <img className="cursor-pointer" src={appstore} alt="#" />
              <p className="text-white text-sm">app store</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="cursor-pointer" src={googleplay} alt="#" />
              <p className="text-white text-sm">Google Play store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
