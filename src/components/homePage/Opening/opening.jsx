import React from 'react'
import backgroundOpening from '../../../images/destination.png'
import './opening.css'
import template from '../../../icons/template.svg'

function opening() {

    const openingDate = {
        title: 'Rafting LB',
        date:
            'Opening Sunday, April 30',
        images: [backgroundOpening, backgroundOpening, backgroundOpening],

    };

    const rotationAngles = [-10, 5, 15]; // Array of rotation angles for each image

    return (
        <div className="template_opening">
            <div className='openingDate'>
            <div className='opening_date_opening'>
                <div className='opening_date_opening_date'><p>{openingDate.date}</p></div>
                <div className='opening_date_opening_title'><h5>{openingDate.title}</h5></div>
            </div>
            <div className='opening_date_images'>
            {openingDate.images.map((image, index) => {
                        const rotationAngle = rotationAngles[index] || 0; // Default to 0 degrees if no angle is provided
                        const imageStyle = {
                        transform: `rotate(${rotationAngle}deg)`,
                        };
                return (
                    
                    <div className='opening_date_img' key={index} style={imageStyle}>
                        <img  src={image} alt='opening' />
                    </div>
                )
            })}
            </div>
            </div>

        </div>
        
    )
}

export default opening