import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { MovieData } from "./MovieData";
import YouTube from "react-youtube";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
const MovieDetails = () => {
  const { id } = useParams();
  const data = MovieData.find((movie) => movie.id == id);
  return (
    <div className="">
      <div className="py-36 bg-black h-screen">
        <div className="flex items-center lg:flex-row flex-col gap-6 px-10 bg-black py-10">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt="#movie"
              className="rounded-xl"
            />
          </div>
          <div className="2nd bg-neutral-900 p-10 lg:w-2/3 w-full">
            <h2 className="font-bold text-red-800 text-4xl">
              {data.original_title}
            </h2>
            <div className="flex items-center py-4 gap-2">
              <p>
                <FaStar className="text-xl text-yellow-700" />
              </p>
              <p>
                <FaStar className="text-xl text-yellow-700" />
              </p>
              <p>
                <FaStar className="text-xl text-yellow-700" />
              </p>
              <p>
                <FaStar className="text-xl text-yellow-700" />
              </p>
              <p>
                <FaStarHalf className="text-xl text-yellow-700" />
              </p>
            </div>
            <p className="text-md text-gray-500 py-2">{data.overview}</p>
            <h3 className="text-lg text-red-800 font-bold">
              {data.release_date}
            </h3>
          </div>
        </div>
        {/* Youtube Video Section */}
        <div className="flex justify-center items-center overflow-x-hidden">
          <div className="bg-black py-10 flex justify-center items-center w-full">
            <div className="">
              <YouTube videoId="u9Mv98Gr5pY" className="" />
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-black">
          <Footer />
        </div>
        {/* scroll to top */}
        <div>
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
