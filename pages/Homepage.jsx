import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Homepage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:3000/api/movies`).then((resp) => {
            setMovies(resp.data);
        })
            .catch((err) => {
                console.log(err)
            })
    }, []);

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
                            <div className="card">
                                <div className="card-img-top">
                                    <img src={movie.image} className='img-fluid' alt="Movie" />
                                </div>
                                <div className="card-body">
                                    <h3 className='text-primary'>{movie.title}</h3>
                                    <h4>
                                        <em>
                                            {movie.director}
                                        </em>
                                    </h4>
                                    <h4>
                                        <em>
                                            {movie.genre}
                                        </em>
                                    </h4>
                                    <h4>
                                        <em>
                                            {movie.abstract}
                                        </em>
                                    </h4>
                                    <Link className='btn btn-primary' to="/movies/1">Leggi tutto</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>

    )
}

export default Homepage
