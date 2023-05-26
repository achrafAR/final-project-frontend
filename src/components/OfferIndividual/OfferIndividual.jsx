import React, { useState } from "react";
import "./OfferIndividual.css";
import MainComp from "../mainComponent/MainComp";
import Image from "../../images/background.jpeg";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";

import "./OfferIndividual.css";
import { startTransition } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function OfferIndividual() {
  const colors = {
    green: "#1e8c7e",
    grey: "#4F4F4f",
  };
  const params = useParams();
  const [offer, setOffer] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      // Redirect to the login page if the user is not logged in
      navigate("/login");
    }
    const getOffer = async () => {
      const id = params.id;
      try {
        const data = await axios.get(`http://localhost:5000/offers/${id}`)
        setOffer(data.data)
      }
      catch(err) {
        console.log(err)
      }
    };
    getOffer();
  }, []);

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClickRating = (value) => {
    setCurrentValue(value);
  };

  const handleMouseHoverRating = (value) => {
    setHoverValue(value);
  };

  const HandleMouseLeaveRating = () => {
    setHoverValue(undefined);
  };

  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="offerIndividual_hero">
      <MainComp
        title="About Us"
        text="Battikh"
        backgroundName="offerIndividual_hero"
      />
      <div className="offerIndividual_content">
        <div className="offerIndividual_content_image">
          <img src={Image} alt="image" />
        </div>
        <div className="offerIndividual_content_details">
          <div className="offerIndividual_content_details_title">
            <h1>Rafting</h1>
            <p>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaa
            </p>
            <h5>$20 per person</h5>
          </div>
          <div className="offerIndividual_content_details_quantity">
            <h2>Quantity</h2>
            <div class="quantity-input">
              <button class="decrement-btn" onClick={decrementQuantity}>
                -
              </button>
              <input
                type="text"
                class="quantity-field"
                value={quantity}
                min="1"
                max={offer?.capacity}
              />
              <button class="increment-btn" onClick={incrementQuantity}>
                +
              </button>
            </div>
          </div>
          <div className="offerIndividual_content_details_totalPrice">
            <h2>Total price</h2>
            <h5>$20</h5>
          </div>
          <div className="offerIndividual_content_details_button">
            <button className="add_to_kart">Add To Kart</button>
            <button className="book_now">Book Now</button>
          </div>
        </div>
      </div>
      <div className="your_own_review_container">
        <div className="your_own_review">
          <div className="your_own_review_title">
            <h5>Create Your Own Review</h5>
          </div>
          <div className="your_own_review_text">
            <form className="your_own_review_text_form">
              <label>Full Name</label>
              <input type="text" className="input_field_review" />
              <label>Your Review</label>
              <input type="text" className="last_input_review" />
              <div className="your_own_review_rating">
                <label>Rating</label>
                <div class="rating_input">
                  {stars.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        size={24}
                        color={
                          (hoverValue || currentValue) > index
                            ? colors.green
                            : colors.grey
                        }
                        onClick={() => handleClickRating(index + 1)}
                        onMouseOver={() => handleMouseHoverRating(index + 1)}
                        onMouseLeave={HandleMouseLeaveRating}
                      />
                    );
                  })}
                </div>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OfferIndividual;
