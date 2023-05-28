import React, { useState, useEffect } from 'react'
// import backgroundOpening from '../../../images/destination.png'
import './opening.css'
import axios from 'axios';

function Opening() {

    const [openingDate, setOpeningDate] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/opening");
                setOpeningDate(response.data.data);
                console.log(openingDate)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const rotationAngles = [-10, 5, 15]; // Array of rotation angles for each image


    if (!openingDate || openingDate.length === 0) {
        // Display a loading state or return null if data is not available yet
        return null;
    }

    const styleImage = {
        filter:'brightness(0.7)'
    }


    return (
        <div className="template_opening">
            <div className='openingDate'>
                <div className='opening_date_opening'>
                    <div className='opening_date_opening_date'><p>{openingDate[0].openingDate}</p></div>
                    <div className='opening_date_opening_title'><h5>{openingDate[0].title}</h5></div>
                </div>
                <div className='opening_date_images'>
                    {openingDate[0].image.map((image, index) => {
                        const rotationAngle = rotationAngles[index] || 0; // Default to 0 degrees if no angle is provided
                        const imageStyle = {
                            transform: `rotate(${rotationAngle}deg)`,
                        };
                        return (

                            <div className='opening_date_img' key={index} style={imageStyle}>
                                <img src={image} alt='opening Date' style={styleImage} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}

export default Opening