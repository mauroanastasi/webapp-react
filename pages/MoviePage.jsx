import React from 'react'

const MoviePage = () => {
    return (
        <div className='row' >
            <div className='col-12 col-md-6 col-lg-4'>
                <img src="https://picsum.photos/300/300" className='img-fluid' alt="movie" />
            </div>
            <div className='col-12 col-md-6 col-lg-8'>
                <h1>Titolo</h1>
                <h1>Regista</h1>
                <h1>Attori</h1>
                <p>Descrizione</p>
            </div>
        </div>
    );
};

export default MoviePage
