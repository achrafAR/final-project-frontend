import React from 'react';
import './starRating.css'

const StarRating = ({ rating }) => {
    const filledStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
        <span key={index}>&#9733;</span>
    ));

    const emptyStars = Array.from({ length: 5 - Math.floor(rating) }, (_, index) => (
        <span key={index + rating}>&#9734;</span>
    ));

    return (
        <div className="rating">
            {filledStars}
            {emptyStars}
        </div>
    );
};

export default StarRating;



