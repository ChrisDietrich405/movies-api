import React, { useEffect, useState } from "react";
import axios from "axios";

import { api } from "../../services/api";
import Movie from "../Movie";

import styles from "./styles.module.css";
import Header from "../Header";

const MovieList = () => {
  const [movies, setMovies] = useState(null);
  const [searchMovie, setSearchMovie] = useState("Star Wars");

  const fetchMovies = async () => {
    const response = await api.get(
      `?s=${searchMovie}&apikey=${process.env.REACT_APP_API_KEY}`
    );  
    console.log(response.data.Search)
    setMovies(response.data.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.movie_container}>
      <Header fetchMovies={fetchMovies} searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <Movie movies={movies} />
    </div>
  );
};

export default MovieList;

