import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Revieform = ({ movie_id, reloadReviews }) => {
    const initialData = { name: "", text: "", vote: "" }

    const [formData, setFormData] = useState(initialData);

    const setFieldValue = (e) => {
        const { value, name } = e.target

        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://127.0.0.1:3000/api/movies/${movie_id}/review`, formData, {
            headers: { "Content-Type": "Application/json" },
        }).then(() => {
            setFormData(initialData)
            reloadReviews();
        });

    };

    return (
        <div className='card' >
            <div className="card-header">
                <h4>Aggiungi la tua recensione</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="" className='control-label' >Name</label>
                        <input type="text" className='form-control' name="name" placeholder="Nome" value={formData.name} onChange={setFieldValue} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='control-label' >Voto</label>
                        <input min="0" max="5" type="number" className='form-control' name="vote" placeholder="voto" value={formData.voto} onChange={setFieldValue} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className='control-label' >Testo</label>
                        <input type="text" id='text' className='form-control' name="text" value={formData.text} onChange={setFieldValue} />
                        <div className="form-group">
                            <button className="btn btn-main" type='submit'>
                                Salva Recensione
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Revieform
