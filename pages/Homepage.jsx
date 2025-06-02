import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <h1 className='text-primary' >All Movies</h1>
            <h2><i>
                Yours Films in Your Hands
            </i></h2>
            <div className='row gy-4' >
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/300/300" className='img-fluid' alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>
                                    Regista
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Attori
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Descrizione
                                </em>
                            </h4>
                            <Link className='btn btn-primary' to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/300/300" className='img-fluid' alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>
                                    Regista
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Attori
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Descrizione
                                </em>
                            </h4>
                            <Link className='btn btn-primary' to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/300/300" className='img-fluid' alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>
                                    Regista
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Attori
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Descrizione
                                </em>
                            </h4>
                            <Link className='btn btn-primary' to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/300/300" className='img-fluid' alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>
                                    Regista
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Attori
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Descrizione
                                </em>
                            </h4>
                            <Link className='btn btn-primary' to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <div className="card">
                        <div className="card-img-top">
                            <img src="https://picsum.photos/300/300" className='img-fluid' alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className='text-primary'>Titolo</h3>
                            <h4>
                                <em>
                                    Regista
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Attori
                                </em>
                            </h4>
                            <h4>
                                <em>
                                    Descrizione
                                </em>
                            </h4>
                            <Link className='btn btn-primary' to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Homepage
