import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import NowPlaying from "./NowPlaying";
import Upcomming from "./Upcomming";
import Popular from "./Popular";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import RingLoader from "react-spinners/RingLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-neutral-900 flex justify-center items-center w-full h-screen">
          <RingLoader color="darkred" size={70} />
        </div>
      ) : (
        <div className="bg-neutral-900 h-screen">
          <div className="overflow-x-hidden bg-neutral-900">
            <Hero />
            <Upcomming />
            <Latest />
            <NowPlaying />
            <Popular />
            <Footer />
            <ScrollToTop />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
