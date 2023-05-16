import React from 'react';
import background from '../../../images/destination.png';
import './asiRiver.css';
import template from '../../../icons/template.svg';

function AsiRiver() {
    const assiRiver = {
        title: 'Assi River',
        description:
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        images: [background, background, background, background],
    };

    return (
        <div className='template_background'>
            <div className='assi_river_container'>
            <div className='assi_river_images'>
                {assiRiver.images.map((image, index) => (
                    <div className='assi_river_image' key={index}>
                        <img src={image} alt='assi river' />
                    </div>
                ))}
            </div>

            <div className='assi_river_title_description'>
                <div className='assi_river_title'>
                    <h5>{assiRiver.title}</h5>
                </div>
                <div className='assi_river_description'>
                    <p>{assiRiver.description}</p>
                </div>
                <div className='assi_river_btn'>
                    <a href='#'>Explore Now</a>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default AsiRiver;