import React, {useEffect, useState} from 'react'
import axios from "axios"
import { api } from '../services/api'

const MovieList = () => {
    const [movies, setMovies] = useState([])
    
    const fetchMovies = async () => {
        const response = await axios.get(`${api}`)
        console.log(response)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

  return (
    <div>
        {}
    </div>
  )
}

export default MovieList