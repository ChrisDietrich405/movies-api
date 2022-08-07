import React from 'react'
import styles from "./styles.module.css"

const Movie = ({movies}) => {
  return (
   <div className={styles.movie_container}>
   <h1>Movies Now</h1>
   <ul>
    {movies && movies.map((movie, index) => {
        return (
            <li className={styles.individual_movie_container} key={index}> 
                <img src={movie.Poster} alt="movie poster" />
                <p>{movie.Title}</p>
            </li>
        )
    })}
    </ul>
   </div>
  )
}

export default Movie