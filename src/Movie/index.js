import React from 'react'

const Movie = ({movies}) => {
  return (
   <div>
    {movies.map((movie, index) => {
        return (
            <div key={index}>
                <h4>{movie.Title}</h4>
                <img src={movie.Poster} alt="movie poster" />
            </div>
        )
    })}
   </div>
  )
}

export default Movie