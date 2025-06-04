import React from 'react'

const ReviewsCard = ({ review }) => {
    const { name, vote, text } = review
    return (
        <>
            <h3>Our Community Reviews</h3>
            <div className="col-12">
                <div className="d-flex justify-content-between">
                </div>
            </div>
            <div className="col-12">
                <div className="card p-4">
                    <p>{text}</p>
                    <p>{vote}</p>
                    <p>{name}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewsCard
