import React, {useState} from "react";
import './reviews.css'

const ReviewPage = ({ reviews, goBack }) => {

    const [expandedReviews, setExpandedReviews] = useState([]);

    const toggleReviewExpand = (index) => {
        setExpandedReviews((prevExpandedReviews) => {
            const newExpandedReviews = [...prevExpandedReviews];
            if (newExpandedReviews.includes(index)) {
                newExpandedReviews.splice(newExpandedReviews.indexOf(index), 1);
            } else {
                newExpandedReviews.push(index);
            }
            return newExpandedReviews;
        });
    };



    const truncateDescription = (description) => {
        if (description.length > 200) {
            return description.substring(0, 200) + "...";
        }
        return description;
    };




    return (
            <div className="review-page">
            <div className="review-page-header">
                <h2>All Reviews</h2>
            </div>
            <div className="review-page-content">
                {reviews.map((review, index) => {
                    const isExpanded = expandedReviews.includes(index);
                    const truncatedDescription = truncateDescription(review.description);
                    return(
                    <div className="review-card" key={index}>
                    <div className="name_details">
                            <div className="review-card-avatar">
                                <div className="avatar-circle">{review.name.charAt(0).toLocaleUpperCase()}</div>
                            </div>
                        <div className="review-card-name">
                            <h5>{review.name}</h5>
                        </div>
                        </div>
                        <div className="review-card-description">
                        <p className={isExpanded ? "expanded" : ""}
                                    onClick={() => toggleReviewExpand(index)}>                    
                                    {isExpanded ? review.description : truncatedDescription}
                                </p>
                        </div>
                        
                    </div>
                    )
                })}
            </div>
            
        </div>
        
    
        
    );
};

export default ReviewPage;