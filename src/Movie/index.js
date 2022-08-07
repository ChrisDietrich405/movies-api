import React from 'react'
import styles from "./styles.module.css"

const Movie = ({movies}) => {
  return (
   <div className={styles.movie_container}>
   
    {movies && movies.map((movie, index) => {
        return (
            <div className={styles.individual_movie_container} key={index}>
                <p>{movie.Title}</p>
                <img src={movie.Poster} alt="movie poster" />
            </div>
        )
    })}
   </div>
  )
}

export default Movie