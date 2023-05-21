import React from "react";
import MainComp from "../mainComponent/MainComp";
import MainDivComponent from "../mainDivComponent/mainDivComponent";
import ActivityDescription from '../homePage/ActivityDescription/activityDescription'
import icon from '../../icons/youtube.png'
import './aboutUs.css'
import Footer from '../../components/Footer/Footer'


function AboutUs() {
    return (
        <div className="aboutUs">
            <MainComp title="About Us" text="Battikh" backgroundName="aboutUs_hero" />
            <MainDivComponent title='hello' description='helloooooooooooooo' src={icon} />
            <ActivityDescription />
            <div className="team">
                <div className="team_title">
                    <p>OUR TEAM</p>
                    <h5>Who We Are</h5>
                </div>
                <div className="team_details">
                    <div className="team_details_details">
                        <img src={icon} alt='team' />
                        <h5>Achraf Al Rachini</h5>
                        <p>Suspendisse potenti nullam ac tortor.
                            Amet aliquam id diam maecenas
                            amet dictum sit amet justo donec.</p>
                    </div>

                </div>
            </div>
            <div className="mission_and_vision">
                <div className="mission_and_vision_main">
                    <div className="mission_and_vision_title">
                        <p>SOME INSIGHTS</p>
                        <h5>Our Mission & Vision</h5>
                    </div>
                    <div className="mission_and_vision_details">
                        <div className="mission_and_vision_detail">
                            <h5>Ultricies Tristique Nulla Aliquet</h5>
                            <p>Egestas quis ipsum suspendisse ultrices gravida. Sed adipiscing 
                                diam donec adipiscing tristique risus nec feugiat in. 
                                Arcu risus quis varius quam quisque id diam enim tortor 
                                at auctor urna nunc euismod nisi porta lorem mollis.</p>
                        </div>
                        <div className="mission_and_vision_detail">
                            <h5>Ultricies Tristique Nulla Aliquet</h5>
                            <p>Egestas quis ipsum suspendisse ultrices gravida. Sed adipiscing 
                                diam donec adipiscing tristique risus nec feugiat in. 
                                Arcu risus quis varius quam quisque id diam enim tortor 
                                at auctor urna nunc euismod nisi porta lorem mollis.</p>
                        </div>
                        <div className="mission_and_vision_detail">
                            <h5>Ultricies Tristique Nulla Aliquet</h5>
                            <p>Egestas quis ipsum suspendisse ultrices gravida. Sed adipiscing 
                                diam donec adipiscing tristique risus nec feugiat in. 
                                Arcu risus quis varius quam quisque id diam enim tortor 
                                at auctor urna nunc euismod nisi porta lorem mollis.</p>
                        </div>
                        <div className="mission_and_vision_detail">
                            <h5>Ultricies Tristique Nulla Aliquet</h5>
                            <p>Egestas quis ipsum suspendisse ultrices gravida. Sed adipiscing 
                                diam donec adipiscing tristique risus nec feugiat in. 
                                Arcu risus quis varius quam quisque id diam enim tortor 
                                at auctor urna nunc euismod nisi porta lorem mollis.</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="our_partner">
                    <div className="our_partner_title">
                        <h5>OUR PARTNER</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                    <div className="our_partner_icon">
                        <img src={icon} alt='partner'/>
                        <img src={icon} alt='partner'/>
                        <img src={icon} alt='partner'/>
                        <img src={icon} alt='partner'/>
                        <img src={icon} alt='partner'/>
                        <img src={icon} alt='partner'/>

                    </div>
                </div>
            <Footer/>
            </div>

    );
}

export default AboutUs;