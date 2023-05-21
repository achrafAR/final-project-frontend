import React from "react";
import MainComp from "../mainComponent/MainComp";
import './offers.css'
import cardImage from '../../images/offersHero.jpg'
import Footer from '../../components/Footer/Footer'
import StarRating from "../StarRating/StarRating";




function Offers() {


    const reviews = [
        { name: 'achraf Al Rachini', description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
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
            <div className="your_own_review_container">
            <div className="your_own_review">
                <div className="your_own_review_title">
                    <h5>Create Your Own Review</h5>
                </div>
                <div className="your_own_review_text">
                    <form className="your_own_review_text_form">
                    <label>Full Name</label>
                    <input type="text" className='input_field_review'/>
                    <label>Your Review</label>
                    <input type="text" className='last_input_review'/>
                    <button>Send</button>
                    </form>
                </div>
            </div>
            </div>
            
            <div className="review_Container">
            <div className="reviews">
                    {firstTenReviews.map((review, index) => (
                        <div className="review_card" key={index}>
                            <div className="review_card_name">
                                <h5>{review.name}</h5>
                            </div>
                            <div className="review_card_description">
                                <p>{review.description}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="review_button"><button><h5>Show All Review</h5></button></div>
            </div>
            <Footer />
        </div>
    )
}

export default Offers