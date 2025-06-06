import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ReviewsCard from '../components/reviewsCard';

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
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                            </div>
                        </div>
                        <h3 className='mt-5'>Our Community Reviews</h3>
                        <div><span>Media voti: </span>{movie.avarage_vote}</div>
                        {movie.reviews.map((review) => (
                            <div className="row gy-2" key={`reviews-${review.id}`}>
                                <ReviewsCard review={review} />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default MoviePage
