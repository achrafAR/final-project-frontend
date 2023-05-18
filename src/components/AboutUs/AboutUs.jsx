import React from 'react'
import Header from '../Header/Header'
import './aboutUs.css'
function AboutUs() {
return (
    <div className='aboutUs_hero'>
        <Header/>
        <div className='aboutUs_container'>
            <div className='aboutUs_title'>
                <div className='aboutUs_title_title'><h5>About Us</h5></div>
                <div className='aboutUs_title_description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            </div>
        </div>
    </div>
)
}

export default AboutUs
