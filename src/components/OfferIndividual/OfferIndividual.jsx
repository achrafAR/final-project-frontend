import React, { useState, useEffect, useRef } from "react";
import "./OfferIndividual.css";
import MainComp from "../mainComponent/MainComp";
import Footer from "../Footer/Footer";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./OfferIndividual.css";
// import { startTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { forwardRef } from "react";

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
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      // Redirect to the login page if the user is not logged in
      navigate("/login");

    }
    const getOffer = async () => {
      try {
        console.log(id)
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
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo && userInfo._id

  const [addReview, setAddReview] = useState({
    name: "",
    description: "",
    userId: userId
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
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const data = {
      name: addReview.name,
      description: addReview.description,
      userId:userId
    };

    const config = {
      headers: { "content-type": "application/json" },
    };

    console.log(data)

    axios
      .post("http://localhost:5000/review", data, config)
      .then((response) => {
        setReview([...review, response.data]);
        window.alert("review created successfully!");

      document.querySelector('input[name="name"]').value = "";
      document.querySelector('input[name="description"]').value = "";
      setAddReview({ name: "", description: "", userId: userId });
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


// const userId = localStorage.getItem("userId"); // Retrieve the userId from localStorage

///create cart 
const handleSetQuantity = (e) => {
  setQuantity(e.target.value)
}

const addToCart = (event) => {
  event.preventDefault(); 

  console.log(userId)
  console.log(id)

  const data = {
    userId: userId, 
    offers: [
      {
        offerId: id, // Replace with actual offer ID
        offerName: offerIndividual.title,
        quantity: quantity,
        price: offerIndividual.price,
      },
    ],
  };

  const config = {
    headers: { "content-type": "application/json" },
  };

  // Make a POST request to your API endpoint with the data
  // You can use libraries like axios or fetch for making the request

  // Example using axios:
  axios.post('http://localhost:5000/myBooking', data, config)
    .then((response) => {
      // Handle successful response
      console.log('Item added to cart:', response.data);
      window.alert('Added To Cart')
    })
    .catch((error) => {
      // Handle error
      console.error('Error adding item to cart:', error);
    });
};




const [amenities, setAmenities] = useState([]);

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






















  return (
    <div className="offerIndividual_hero">
      <MainComp
        title="Offer"
        text="Show more about this offer"
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
                name='quantity'
                className = "quantity-field"
                value={quantity}
                min="1"
                max={10}
                onChange={handleSetQuantity}
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
            <button 
            className="add_to_kart"
            onClick={addToCart}
            >Add To Kart</button>
            <Link className="book_now" to={`/booking/${userId}`}>My Booking</Link>
          </div>
        </div>

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




      <div className="your_own_review_container">
        <div className="your_own_review">
          <div className="your_own_review_title">
            <h5>Create Your Own Review</h5>
          </div>
          <div className="your_own_review_text">
            <form className="your_own_review_text_form" onSubmit={postReview}         
            >
              <label>Full Name</label>
              <input type="text" className="input_field_review" name="name"
                          onChange={handleChange}
                          autoComplete='off'
                          />
              <label>Your Review</label>
              <input type="text" className="last_input_review" name="description"
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
