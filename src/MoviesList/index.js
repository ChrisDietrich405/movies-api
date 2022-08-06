import React, { useEffect, useState } from "react";
import axios from "axios";

import { api } from "../services/api";
import Movie from "../Movie";

import styles from "./styles.module.css"

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);

  const fetchMovies = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=b7791e02";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson.Search);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.movie_container}>
      <Movie movies={movies} />
    </div>
  );
};

export default MovieList;
