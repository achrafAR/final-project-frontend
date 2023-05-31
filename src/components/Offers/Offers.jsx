import React, { useState, useEffect } from "react";
import MainComp from "../mainComponent/MainComp";
import './offers.css'
// import cardImage from '../../images/offersHero.jpg'
import Footer from '../../components/Footer/Footer'
import StarRating from "../StarRating/StarRating";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewPage from "../reviews/Reviews";
import PopupReview from "./PopupReview";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Offers() {


    const navigateToBooking = () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo)
        if (userInfo && userInfo._id) {
            const userId = userInfo._id;
            console.log(userId)
            navigate(`/booking/${userId}`);
        } else {
            navigate("/login");
        }
    };

    const [showReviewPage, setShowReviewPage] = useState(false);
    const [reviews, setReviews] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/review");
                setReviews(response.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const firstThreeReviews = reviews.slice(-3); // Get the first 10 reviews


    const [offers, setOffers] = useState([])
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/offers");
                setOffers(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/amenities");
                setAmenities(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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


    const navigateToOffer = (id) => {
        navigate(`/offerIndividual/${id}`)
    }



    const [offersMain, setOffersMain] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/offersMain");
                setOffersMain(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="offers">
            {offersMain.length > 0 && (
                <MainComp title={offersMain[0].title} text={offersMain[0].description} backgroundName={offersMain[0].backgroundName} />

            )
            }

            <div className="offers_hero_title"><h5>
                Don't Hesitate, Book Now
            </h5>
            </div>
            <div className="offers_hero_cards">
                {offers && offers.map((offer, index) => (
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
                                <button onClick={() => {
                                    navigateToOffer(offer._id)
                                }}><h5>Book Now</h5></button>
                            </div>


                        </div>



                    )))
                }
            </div>

            <div className="amenities">
                {amenities && amenities.map((amenities,index) => {
                    return(
                        <div className="amenities_details">
                    <img src={amenities.icon} alt ='icon'/>
                    <p>{amenities.title}</p>
                </div>
                    )
                })}
                
            </div>

            <div className="offers_mybooking">
                <div className="offers_mybooking_title">
                    <button onClick={
                        navigateToBooking
                    }>My Bookings</button>
                </div>
            </div>


            <div className="review_Container">
                <div className="reviews">

                    {firstThreeReviews && firstThreeReviews.map((review, index) => {
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