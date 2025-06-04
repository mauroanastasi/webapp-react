import React from 'react'

const ReviewsCard = ({ review }) => {
    const { name, vote, text } = review
    return (
        <>
            <div className="col-12">
                <div className="d-flex justify-content-between">
                </div>
            </div>
            <div className="col-12">
                <div className="card p-1">
                    <p>{text}</p>
                    <p>{name}</p>
                    <p>{vote}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewsCard
