import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
const Latest = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=f5166632c42086925b52b43e86c23c9a"
      )
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        <div>
          <div className="1st flex justify-between mx-10 py-10">
            <h1 className="lg:text-3xl text-xl font-bold text-gray-200">
              Latest Movies
            </h1>
            <h4 className="text-xl font-semibold text-red-600">View All</h4>
          </div>

          <div className="overflow-x-hidden overflow-y-hidden py-10 mx-10">
            <div className="">
              <Slider {...settings}>
                {movies.map((movie) => (
                  <div
                    className="flex justify-center items-center w-56 h-60"
                    key={movie.id}
                  >
                    <img
                      className="hover:-translate-y-8 hover:border-l-8 hover:border-red-600 relative cursor-pointer"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="absolute bottom-10">
                          <h2 className="lg:text-3xl text-2xl text-white font-bold">
                            {movie.original_name}
                          </h2>
                          <h2 className="text-white lg:text-xl font-bold py-2">
                            {movie.first_air_date}
                          </h2>
                          <button className="flex items-center gap-2 bg-red-600 text-white py-2 px-6 cursor-pointer uppercase font-bold">
                            <FaPlay />
                            play now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;