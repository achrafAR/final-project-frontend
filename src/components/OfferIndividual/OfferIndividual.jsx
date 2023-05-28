import React, { useState } from "react";
import "./OfferIndividual.css";
import MainComp from "../mainComponent/MainComp";
// import Image from "../../images/background.jpeg";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";

import "./OfferIndividual.css";
import { startTransition } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import Offers from "../Offers/Offers.js";

function OfferIndividual() {
  const colors = {
    green: "#1e8c7e",
    grey: "#4F4F4f",
  };

  const { id } = useParams();

  const [offerIndividual, setOfferIndividual] = useState([]);
  // const [previousRating, setPreviousRating] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")? 
    JSON.parse(localStorage.getItem('userInfo')) : {};


    if (!userInfo) {
      // Redirect to the login page if the user is not logged in
      navigate("/login");
    }
    const getOffer = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/offers/${id}`)
        setOfferIndividual(response.data.data)
        setTotalRating(response.data.data.totalRating);
        setTotalClick(response.data.data.totalClick);

        

      }
      catch (err) {
        console.log(err)
      }
    };
    getOffer();
  }, [id]);

  


  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [totalRating, setTotalRating] = useState(0)
  const [totalClick, setTotalClick] = useState(0)
  const [review, setReview] = useState([])

  const [addReview, setAddReview] = useState({
    name: "",
    description: "",
    userId: "",
  });
  const handleChange = async (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;

    const newFormData = { ...addReview };
    newFormData[fieldName] = fieldValue;

    setAddReview(newFormData);

  };

  const postReview = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",addReview.name);
    formData.append("description", addReview.description);
    formData.append("userId",JSON.parse(localStorage.getItem('userInfo'))._id);

    // console.log(formData)

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post("http://localhost:5000/review", formData, config)
      .then((response) => {
        setReview([...review, response.data]);
        window.alert("product created successfully!");

      })
      .catch((error) => {
        console.log(error.response.data);
      });

  };


  const handleClickRating = async (value) => {
    setCurrentValue(value)
    
    try {
      const updatedTotalRating = totalRating + value;
      const updatedTotalClick = totalClick + 1;

      await axios.put(`http://localhost:5000/offers/${id}`, {
        totalRating: updatedTotalRating,
        totalClick: updatedTotalClick,
      });

      // setTotalRating(updatedTotalRating);
      // setTotalClick(updatedTotalClick);
    } catch (err) {
      console.log(err);
    }
    }
    


  const handleMouseHoverRating = (value) => {
    setHoverValue(value)
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
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    // Calculate the total price based on the quantity
    const totalPrice = offerIndividual.price * quantity;
    setTotalPrice(totalPrice);
  }, [quantity, offerIndividual.price]);


const userId = localStorage.getItem("userId"); // Retrieve the userId from localStorage


  

  return (
    <div className="offerIndividual_hero">
      <MainComp
        title="About Us"
        text="Battikh"
        backgroundName="offerIndividual_hero"
      />

      <div className="offerIndividual_content">
        <div className="offerIndividual_content_image">
          <img src={offerIndividual.image} alt="image" />
        </div>
        <div className="offerIndividual_content_details">
          <div className="offerIndividual_content_details_title">
            <h1>{offerIndividual.title}</h1>
            <p>
              {offerIndividual.description}
            </p>
            <h5>{offerIndividual.price}$ per person</h5>
          </div>
          <div className="offerIndividual_content_details_quantity">
            <h2>Quantity</h2>
            <div class="quantity-input">
              <button class="decrement-btn" onClick={decrementQuantity}>
                -
              </button>
              <input
                type="text"
                className = "quantity-field"
                value={quantity}
                min="1"
                max={10}
              />
              <button class="increment-btn" onClick={incrementQuantity}>
                +
              </button>
            </div>
          </div>
          <div className="offerIndividual_content_details_totalPrice">
            <h2>Total price</h2>
            <h5>${totalPrice}</h5>
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
            <form className="your_own_review_text_form" onSubmit={postReview}>
              <label>Full Name</label>
              <input type="text" className="input_field_review" name = "name"
                          onChange={handleChange}
                          autoComplete='off'
                          />
              <label>Your Review</label>
              <input type="text" className="last_input_review" name  = "description"
              onChange={handleChange}
              autoComplete='off'/>
              <div className="your_own_review_rating">
                <label>Rating</label>
                <div class="rating_input">
                  {stars.map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <FaStar
                        key={index}
                        size={24}
                        color={
                          (hoverValue || currentValue) >= starValue
                            ? colors.green
                            : colors.grey
                        }
                        onClick={() => handleClickRating(starValue)}
                        onMouseOver={() => handleMouseHoverRating(starValue)}
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
