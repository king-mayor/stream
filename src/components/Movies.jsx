import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Footer from "./Footer";
import { MovieData } from "./MovieData";
import ScrollToTop from "./ScrollToTop";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center bg-neutral-900 h-screen w-full">
          <ClimbingBoxLoader color="darkred" size={36} className="text-7xl" />
        </div>
      ) : (
        <div className="bg-neutral-900 h-screen">
          <div className="bg-neutral-900 w-full">
            <div className="mx-auto container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-6 py-28 bg-neutral-900">
              {MovieData.map((data) => (
                <div key={data.id} className=" text-center">
                  <Link to={`/movie/${data.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                      alt="#movie"
                      className="cursor-pointer lg:hover:-translate-y-4 hover:-translate-y-2"
                    />
                  </Link>
                  <div className="py-2">
                    <h2 className="text-md text-white font-bold">
                      {data.original_title}
                    </h2>
                    <h2 className="text-md text-red-600 font-bold">
                      {data.release_date}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-neutral-900 py-10">
              <Footer />
            </div>
            <div>
              <ScrollToTop />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
