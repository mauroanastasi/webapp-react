import React from 'react'

const ReviewsCard = ({ review }) => {
    const { name, vote, text } = review
    return (
        <>
            <div className="col-12">
                <div className="card p-1">
                    <p>{text}</p>
                    <p>{vote}</p>
                    <p>{name}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewsCard
