import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './asiRiver.css';
import template from '../../../icons/template.svg';

function AsiRiver() {
    const [assiRiver, setAssiRiver] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/asiRiver");
                setAssiRiver(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);




    return (
        <div className='template_background'>
            <div className='assi_river_container'>
                <div className='assi_river_images'>
                    {assiRiver && assiRiver[0].image && Array.isArray(assiRiver[0].image) ? (
                        assiRiver[0].image.map((image, index) => (
                            <div className='assi_river_image' key={index}>
                                <img src={image} alt='assi river' />
                            </div>
                        ))
                    ) : (
                        <div>No images available</div>
                    )}
                </div>

                <div className='assi_river_title_description'>
                    <div className='assi_river_title'>
                        <h5>{assiRiver[0] && assiRiver[0].title}</h5>
                    </div>
                    <div className='assi_river_description'>
                        <p>{assiRiver[0] && assiRiver[0].description}</p>
                    </div>
                    <div className='assi_river_btn'>
                        <a href='/offers'>Explore Now</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AsiRiver;