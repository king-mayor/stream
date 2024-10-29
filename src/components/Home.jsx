import React from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import NowPlaying from "./NowPlaying";
import Upcomming from "./Upcomming";
import Popular from "./Popular";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
const Home = () => {
  return (
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
  );
};

export default Home;
