import React, { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Link } from "react-router-dom";
const Hero = () => {
  // const [movies, setMovies] = useState([]);
  const { movies } = useContext(MovieContext);
  console.log(movies);
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  // const getMovies = async () => {
  //   try {
  //     fetch(
  //       "https://api.themoviedb.org/3/trending/movie/day?api_key=f5166632c42086925b52b43e86c23c9a"
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setMovies(json.results));
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(movies);
  // };
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="">
              <div className="relative opacity-85 -z-50">
                <img
                  className="w-full h-[600px]"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </div>
              <div className="flex lg:flex-row lg:justify-center flex-col items-center text-wrap px-10 ">
                <div className="absolute bottom-12 pb-20">
                  <div className="flex lg:flex-row flex-col lg:gap-32 gap-6">
                    <div className="1st">
                      <h2 className="text-red-600 lg:text-6xl text-3xl font-bold py-10">
                        {movie.original_title}
                      </h2>
                      <h3 className="text-white font-bold py-2 lg:text-3xl text-xl">
                        {movie.release_date}
                      </h3>
                      <h3 className="text-red-600 font-bold py-2 lg:text-3xl text-xl">
                        {movie.popularity}
                      </h3>
                      <h3 className="text-white font-bold py-2 lg:text-3xl text-xl">
                        {movie.media_type}
                      </h3>
                      <button className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-6 my-4 outline-none border-none cursor-pointer uppercase">
                        <FaPlay /> play now
                      </button>
                    </div>
                    {/* <div className="flex lg:gap-6 gap-2 items-center">
                      <h2>
                        <FaCirclePlay className="text-5xl text-white cursor-pointer hover:text-red-600" />
                      </h2>
                      <h2 className="text-red-600 font-bold lg:text-4xl text-2xl uppercase">
                        watch trailer
                      </h2>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Hero;
