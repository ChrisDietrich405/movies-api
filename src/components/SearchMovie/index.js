import React from 'react'

import styles from "./styles.module.css"
const Header = ({searchMovie, setSearchMovie, fetchMovies}) => {
  return (
    <div className={styles.header_container}>
        <img src="" alt="" />
        <input type="text" value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)} />
        <button onClick={fetchMovies}>search movie</button>
    </div>
  )
}

export default Header