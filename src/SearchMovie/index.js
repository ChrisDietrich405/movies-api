import React from 'react'

const SearchMovie = ({searchMovie, setSearchMovie, fetchMovies}) => {
  return (
    <div>
        <input type="text" value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)} />
        <button onClick={fetchMovies}>search movie</button>
    </div>
  )
}

export default SearchMovie