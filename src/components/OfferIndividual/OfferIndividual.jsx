import React, {useState} from 'react'
import './OfferIndividual.css'
import MainComp from "../mainComponent/MainComp";
import Image from '../../images/background.jpeg';
import Footer from '../Footer/Footer';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import './OfferIndividual.css';





function OfferIndividual() {


  const [rating, setRating] = useState(0); // State to hold the rating value

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='offerIndividual_hero'>
      <MainComp title="About Us" text="Battikh" backgroundName="offerIndividual_hero" />
      <div className='offerIndividual_content'>
        <div className='offerIndividual_content_image'>
          <img src={Image} alt='image' />
        </div>
        <div className='offerIndividual_content_details'>
          <div className='offerIndividual_content_details_title'>
            <h1>Rafting</h1>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaa
            </p>
            <h5>$20 per person</h5>
          </div>
          <div className='offerIndividual_content_details_quantity'>
            <h2>Quantity</h2>
            <div class="quantity-input">
              <button class="decrement-btn">-</button>
              <input type="text" class="quantity-field" value="1" min="1" />
              <button class="increment-btn">+</button>
            </div>

          </div>
          <div className='offerIndividual_content_details_totalPrice'>
            <h2>Total price</h2>
            <h5>$20</h5>
          </div>
          <div className='offerIndividual_content_details_button'>
            <button className='add_to_kart'>Add To Kart</button>
            <button className='book_now'>Book Now</button>

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
              <input type="text" className='input_field_review' />
              <label>Your Review</label>
              <input type="text" className='last_input_review' />
              <div className='your_own_review_rating'>
                <label>Rating</label>
                <IconContext.Provider value={{ className: 'star-empty' }}>
                  <Rating
                    initialRating={rating}
                    emptySymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                    fractions={2}
                    onChange={handleRatingChange}
                  />
                </IconContext.Provider>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default OfferIndividual