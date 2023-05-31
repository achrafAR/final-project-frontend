import React, { useState, useEffect } from 'react'
import './welcome.css'
import welcomeIcons from '../../../icons/location.png'
import axios from 'axios';


function Welcome() {


    const [welcomeDestination, setWelcomeDestination] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://raftinglb.onrender.com/welcome");
                setWelcomeDestination(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='welcome_container'>
            {welcomeDestination.map((welcome, index) => {
                return (
                    <div className='welcome' key={index}>
                        <div className='welcome_image'>
                            <img src={welcomeIcons} alt=" welcome" />
                        </div>
                        <div className='welcome_title_description'>
                            <h5>{welcome.title}</h5>
                            <p>{welcome.description}</p>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default Welcome