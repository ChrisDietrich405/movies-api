import React, { useEffect, useState } from "react";
import axios from "axios";

import { api } from "../services/api";
import Movie from "../Movie";

import styles from "./styles.module.css";
import SearchMovie from "../SearchMovie";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);

  const fetchMovies = async () => {
    const response = await api.get(
      `?s=${searchMovie}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    
    setMovies(response.data.Search);
  };

  useEffect(() => {
    fetchMovies(searchMovie);
  }, []);

  return (
    <div className={styles.movie_container}>
      <SearchMovie fetchMovies={fetchMovies} searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <Movie movies={movies} />
    </div>
  );
};

export default MovieList;

// useEffect(() => {
//   fetchMovies(searchMovie);
// }, [searchMovie]);

// };

// export default MovieList;
