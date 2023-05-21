import React from 'react'
import MainComp from "../mainComponent/MainComp";
import MainDivComponent from "../mainDivComponent/mainDivComponent";
import icon from '../../icons/youtube.png'
import assiMap from '../../images/assiMap.png'
import './contactUs.css'
import Footer from '../../components/Footer/Footer'


function ContactUs() {
  return (
    <div className='contactUs_container'>
      <MainComp title="Contact Us" text="Battikh" backgroundName="ContactUs_hero" />
      <MainDivComponent title='hello' description='helloooooooooooooo' src={icon} />
      <div className='contactUs_container_map_form'>
        <div className='contactUs_container_map'>
        <img
        src={assiMap}
      />
        </div>
        <div className='contact_container_form'>
          <h5>We’d love To Hear From You!</h5>
          <form>
            <label>First & Last Name *</label>
            <input type="text" className='input_field'/>
            <label>Email Address *</label>
            <input type="text" className='input_field' />
            <label>Subject</label>
            <input type="text" className='input_field' />
            <label>Comment or Message</label>
            <input type="text" className='last_input'/>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
