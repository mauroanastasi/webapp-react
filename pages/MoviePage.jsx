import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const fetchMovies = () => {

        axios.get(`http://127.0.0.1:3000/api/movies/${id}`).then((resp) => {
            setMovie(resp.data);
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(fetchMovies, []);
    return (
        <>
            <div className='row'>
                {movie === null ? (
                    `caricamento dati libro`
                ) : (
                    <>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <img src={movie.image} className='img-fluid' alt="movie" />
                        </div>
                        <div className='col-12 col-md-6 col-lg-8'>
                            <h1>{movie.title}</h1>
                            <h1>{movie.director}</h1>
                            <h1>{movie.genre}</h1>
                            <p>{movie.abstract}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default MoviePage
