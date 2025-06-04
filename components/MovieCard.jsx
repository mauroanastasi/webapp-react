import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const { image, title, director, genre, abstract, id } = movie

    return (
        <div className="card">
            <div className="card-img-top">
                <img src={image} className='img-fluid' alt="Movie" />
            </div>
            <div className="card-body">
                <h3 className='text-primary'>{title}</h3>
                <h4>
                    <em>
                        {director}
                    </em>
                </h4>
                <h4>
                    <em>
                        {genre}
                    </em>
                </h4>
                <h4>
                    <em>
                        {abstract}
                    </em>
                </h4>
                <Link className='btn btn-primary' to={`/movies/${id}`}>Leggi tutto</Link>
            </div>
        </div>
    )
}

export default MovieCard
