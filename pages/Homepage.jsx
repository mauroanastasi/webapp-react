import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Homepage = () => {
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        axios.get(`http://127.0.0.1:3000/api/movies`).then((resp) => {
            setMovies(resp.data);
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(fetchMovies, []);

    return (
        <>
            <h1 className='text-primary' >All Movies</h1>
            <h2><i>
                Yours Films in Your Hands
            </i></h2>
            <div className='row gy-4' >
                {movies.map((movie) => {
                    return (
                        <div key={`movie-${movie.id}`} className='col-12 col-md-6 col-lg-4'>
                            <MovieCard movie={movie} />
                        </div>
                    )
                })}
            </div>

        </>

    )
}

export default Homepage
