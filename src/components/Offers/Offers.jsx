import React, { useState } from "react";
import MainComp from "../mainComponent/MainComp";
import './offers.css'
import cardImage from '../../images/offersHero.jpg'
import Footer from '../../components/Footer/Footer'
import StarRating from "../StarRating/StarRating";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewPage from "../reviews/Reviews";
import PopupReview from "./PopupReview";



function Offers() {
    const [showReviewPage, setShowReviewPage] = useState(false);



    const reviews = [
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccc' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
        { name: 'achraf', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    ]

    const firstTenReviews = reviews.slice(0, 3); // Get the first 10 reviews



    const offers = [
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 2,
            image: cardImage,
        },
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 4,
            image: cardImage,
        },
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 4,
            image: cardImage,
        },
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 4,
            image: cardImage,
        },
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 4,
            image: cardImage,
        },
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 4,
            image: cardImage,
        },
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 4,
            image: cardImage,
        },
        {
            id: 1,
            title: "Offer 1",
            price: 10,
            rating: 4,
            image: cardImage,
        }
    ]

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
        if (description.length > 250) {
            return description.substring(0, 200) + "...";
        }
        return description;
    };






    return (
        <div className="offers">
            <MainComp title="Offers" text="Battikh" backgroundName="offers_hero" />
            <div className="offers_hero_title"><h5>
                Don't Hesitate, Book Now
            </h5>
            </div>
            <div className="offers_hero_cards">
                {offers.map((offer, index) => (
                    (
                        <div className="offers_hero_card" key={index}>
                            <div className='offers_hero_card_img'>
                                <img src={offer.image} alt={offer.title} />
                            </div>
                            <div className="offers_hero_card_title"><h5>{offer.title}</h5></div>
                            <div className="offers_hero_card_price"><h5>${offer.price}/Per Person</h5></div>
                            <div className="offers_hero_card_rating">
                                <StarRating rating={offer.rating} />
                            </div>
                            <div className="offers_hero_card_button">
                                <button><h5>Book Now</h5></button>
                            </div>


                        </div>



                    )))
                }
            </div>
            



            <div className="review_Container">
                    <div className="reviews">

                        {firstTenReviews.map((review, index) => {
                            const isExpanded = expandedReviews.includes(index);
                            const truncatedDescription = truncateDescription(review.description);
                            return (
                                <div className="review_card" key={index}>
                                    <div className="name_details">
                                        <div className="review-card-avatar">
                                            <div className="avatar-circle">{review.name.charAt(0).toLocaleUpperCase()}</div>
                                        </div>
                                        <div className="review_card_name">
                                            <h5>{review.name}</h5>
                                        </div>
                                    </div>

                                    <div className="review_card_description">
                                        <p className={isExpanded ? "expanded" : ""}
                                            onClick={() => toggleReviewExpand(index)}>
                                            {isExpanded ? review.description : truncatedDescription}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}


                </div>

                <div className="review_button">
                    <button className="review_button_button" onClick={() => setShowReviewPage(true)}>Show All Review</button>
                    <PopupReview trigger={showReviewPage} setTrigger={setShowReviewPage}>
                        <ReviewPage reviews={reviews} />
                    </PopupReview>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Offers