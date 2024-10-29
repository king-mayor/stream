import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [playMovie, setPlayMovie] = useState([]);
  const [popular, setPopular] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const getMovies = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=f5166632c42086925b52b43e86c23c9a"
      )
        .then((res) => res.json())
        .then((json) => setMovies(json.results));
    } catch (error) {
      console.log(error);
    }
    console.log(movies);
  };

  const getUpcoming = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=f5166632c42086925b52b43e86c23c9a"
      )
        .then((res) => res.json())
        .then((json) => setUpComing(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  const getPlaying = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=f5166632c42086925b52b43e86c23c9a"
      )
        .then((res) => res.json())
        .then((json) => setPlayMovie(json.results));
    } catch (error) {
      console.log(error);
    }
    console.log(movies);
  };
  const getPopular = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=f5166632c42086925b52b43e86c23c9a"
      )
        .then((res) => res.json())
        .then((json) => setPopular(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  const getMovieData = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/movie/movie_id?api_key=f5166632c42086925b52b43e86c23c9a"
      )
        .then((res) => res.json())
        .then((json) => setMovieData(json.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
    getUpcoming();
    getPlaying();
    getPopular();
    getMovieData();
  }, []);
  return (
    <MovieContext.Provider
      value={{ movies, upcoming, playMovie, popular, movieData }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
