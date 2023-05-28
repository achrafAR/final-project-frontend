import React, { useState, useEffect } from "react";
import MainComp from "../mainComponent/MainComp";
import MainDivComponent from "../mainDivComponent/mainDivComponent";
import ActivityDescription from '../homePage/ActivityDescription/activityDescription'
import './aboutUs.css'
import Footer from '../../components/Footer/Footer'
import axios from "axios";
import Najjar from '../../icons/najjar.jpg'
import pepesi from '../../icons/pepsi.png'
import nakhle from '../../icons/nakhla.avif'
import fantasia from '../../icons/fantasia.jpeg'
import aqua from '../../icons/AquaDesign_Color_2020_2370x.webp'
import cortina from '../../icons/cortina.png'



function AboutUs() {
    const [aboutUsMain, setAboutUsMAin] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/AboutUsMain");
                setAboutUsMAin(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [aboutUsValue, setAboutUsValue] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/AboutUsValue");
                setAboutUsValue(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [aboutUsTeam, setAboutUsTeam] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/AboutUsTeam");
                setAboutUsTeam(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [aboutUsMission, setAboutUsMission] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/AboutUsMission");
                setAboutUsMission(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

















    return (
        <div className="aboutUs">
            {aboutUsMain.length > 0 && (
                <MainComp title={aboutUsMain[0].title} text={aboutUsMain[0].description} backgroundName={aboutUsMain[0].backgroundName} />

            )}
            <div className="mainDivComponents_aboutUs">
                {aboutUsValue.map((aboutUsValue, index) => {
                    return (
                        <MainDivComponent title={aboutUsValue.title} description={aboutUsValue.description} src={aboutUsValue.image} />

                    )
                })}
            </div>

            <ActivityDescription />

            <div className="team">
                <div className="team_title">
                    <p>OUR TEAM</p>
                    <h5>Who We Are</h5>
                </div>
                <div className="team_container">
                    {aboutUsTeam.map((aboutUsTeam, index) => {
                        return (

                            <div className="team_details" key={index}>
                                <div className="team_details_details">
                                    <img src={aboutUsTeam.image} alt='team' />
                                    <h5>{aboutUsTeam.title}</h5>
                                    <p>{aboutUsTeam.description}</p>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>


            <div className="mission_and_vision">
                <div className="mission_and_vision_main">
                    <div className="mission_and_vision_title">
                        <p>SOME INSIGHTS</p>
                        <h5>Our Mission & Vision</h5>
                    </div>
                    <div className="mission_and_vision_details">
                        {aboutUsMission.map((aboutUsMission, index) => {
                            return (
                                <div className="mission_and_vision_detail">
                                    <h5>{aboutUsMission.title}</h5>
                                    <p>{aboutUsMission.description}</p>
                                </div>
                            )
                        })}


                    </div>

                </div>
            </div>
            <div className="our_partner">
                <div className="our_partner_title">
                    <h5>OUR PARTNER</h5>
                    <p>We are proud to collaborate with a diverse network of trusted partners, fostering innovation and delivering exceptional value to our customers</p>
                </div>
                <div className="our_partner_icon">
                    <img src={pepesi} alt='partner' />
                    <img src={Najjar} alt='partner' />
                    <img src={fantasia} alt='partner' />
                    <img src={cortina} alt='partner' />
                    <img src={aqua} alt='partner' />
                    <img src={nakhle} alt='partner' />

                </div>
            </div>
            <Footer />
        </div>

    );
}

export default AboutUs;