import React from 'react'
import './OfferIndividual.css'
import MainComp from "../mainComponent/MainComp";
import Image from '../../images/background.jpeg';
import Footer from '../Footer/Footer';


function OfferIndividual() {
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
      <Footer/>
    </div>
  )
}

export default OfferIndividual