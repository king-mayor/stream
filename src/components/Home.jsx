import React from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import NowPlaying from "./NowPlaying";
import Upcomming from "./Upcomming";
import Popular from "./Popular";
const Home = () => {
  return (
    <div className="overflow-x-hidden bg-neutral-900">
      <Hero />
      <Upcomming />
      <Latest />
      <NowPlaying />
      <Popular />
    </div>
  );
};

export default Home;
