import React, { useEffect, useState } from "react";
import Banner2 from "../assets/Banner2.jpg";
import blockbuster from "../assets/blockbuster.jpg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import whatsap from "../assets/whatsap.png";
import youtube from "../assets/youtube.png";
import worker3 from "../assets/worker3.jpg";
import service from "../assets/services1.jpg";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { DotLoader } from "react-spinners";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen bg-neutral-900">
          <DotLoader color="darkred" size={36} className="text-7xl" />
        </div>
      ) : (
        <div className="bg-neutral-900 h-screen py-28">
          <div className="bg-neutral-900 flex flex-col justify-start px-10">
            <div className="1st py-4">
              <h1 className="text-white font-bold lg:text-4xl text-2xl">
                About Us
              </h1>
              <p className="text-white text-lg py-4">
                Streamit is a Media and Entertainment Company, We provide our
                viewers and subscribers with the following services
              </p>
              <img
                className="lg:w-72 w-full py-6 rounded-2xl"
                src={Banner2}
                alt="banner"
              />
              <h2 className="py-2 text-white text-xl uppercase">
                1. Business/Brand promotion
              </h2>
              <p className="text-white text-md py-2">
                We help businesses and brands like yours generate more profits
                by building awareness, driving web traffic, connecting with
                customers, and growing overall sales.
              </p>
              <p className="text-white text-md py-2">
                *We provide the largest engagement on your campaigns and
                advertisements with ourprofessional campaign and advert strategy
                *We are your best bet to scale up your business/brand/events
                using internet Marketing
              </p>
            </div>
            <div className="2nd py-4">
              <h2 className="py-2 text-white text-xl">2. MOVIE BLOCKBUSTERS</h2>
              <img
                className="lg:w-72 w-full py-6 rounded-2xl"
                src={blockbuster}
                alt="#blockbuster"
              />
              <p className="text-md text-white py-4">
                We provide you with Unlimited and Recent Movie updates of your
                choice fully ready for Download, which includes.
              </p>
              <div className="py-2">
                <p className="text-white text-md">*MOVIES</p>
                <p className="text-white text-md">*CARTOON</p>
                <p className="text-white text-md">*SERIES</p>
                <p className="text-white text-md">*ANIME</p>
              </div>
            </div>
            <div className="3rd py-4">
              <h2 className="py-2 text-white text-xl">
                3. WEB APPLICATION DESIGN/MAINTENANCE
              </h2>
              <img
                className="lg:w-72 w-full py-6 rounded-2xl"
                src={worker3}
                alt="#worker3"
              />
              <p className="text-md text-white py-4">
                Are you just starting a Business or company? and you need a
                professional website to promote your business and give it the
                recognition it needs? search no more we've got you covered with
                our professional team working tiredlessly to get the job done we
                are your best bet!!
              </p>
              <div className="py-2">
                <p className="text-white text-md">
                  *Professional website development
                </p>
                <p className="text-white text-md">*Website maintenace</p>
                <p className="text-white text-md">
                  *SEO (Search Engine Optimization)
                </p>
                <p className="text-white text-md">*CODING TUTORIALS</p>
              </div>
            </div>
            <div className="4th py-4">
              <h2 className="py-2 text-white text-xl">
                4. CONDUCIVE WORKSPACE
              </h2>
              <img
                className="lg:w-72 w-full py-6 rounded-2xl"
                src={service}
                alt="team"
              />
              <p className="text-md text-white py-4">
                Take your productivity to another level. We offer the best and
                unique WORKSPACE
              </p>
              <div className="py-2">
                <p className="text-white text-md">*Stable Power Supply</p>
                <p className="text-white text-md">*Front Desk Services</p>
                <p className="text-white text-md">
                  *Credible & Accessible location
                </p>
                <p className="text-white text-md">*Super fast WiFi</p>
                <p className="text-white text-md">
                  Contact us now for more enquiry
                </p>
                <div className="flex gap-2 py-4">
                  <img
                    className="text-md cursor-pointer"
                    src={twitter}
                    alt="twitter"
                  />
                  <img
                    className="text-md cursor-pointer"
                    src={whatsap}
                    alt="whatsap"
                  />
                  <img
                    className="text-md cursor-pointer"
                    src={instagram}
                    alt="instagram"
                  />
                  <img
                    className="text-md cursor-pointer"
                    src={facebook}
                    alt="facebook"
                  />
                  <img
                    className="text-md cursor-pointer"
                    src={youtube}
                    alt="youtube"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900">
            <Footer />
          </div>
          <div>
            <ScrollToTop />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
