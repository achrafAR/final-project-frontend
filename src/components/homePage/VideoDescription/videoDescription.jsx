import React, { useState, useEffect } from 'react'
import video from '../../../images/background.jpeg'
import axios from 'axios';
import './videoDescription.css'
import template from '../../../icons/template.svg';


function VideoDescription() {

    const [videoDescription, setVideodescription] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/videoDescription");
                setVideodescription(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);






    return (
        <div className='video_description_container'>
            {
                videoDescription.map((videoDescription, index) => {
                    return (
                        <div className='video_description'>
                            <div className='video_description_information'>
                                <div className='video_description_information_title'><h2>{videoDescription.title}
                                </h2></div>
                                <div className='video_description_information_description'><p>{videoDescription.description}</p></div>
                                <div className='blogger'>
                                    <div className='blogger_image'>
                                        <img src={videoDescription.imagePhotographer} alt='video' />

                                    </div>
                                    <div className='blogger_details'>
                                        <div className='blogger_details_name'><h5>{videoDescription.namePhotographer}</h5></div>
                                        <div className='blogger_details_job'><p>{videoDescription.descriptionPhotographer}


                                        </p></div>
                                    </div>
                                </div>
                            </div>
                            <div className='video_description_video'>
                            <iframe
    width="560"
    height="315"
    src='https://www.youtube.com/watch?v=n0w75bmmqmE'
    title="YouTube Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
></iframe>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    )
}

export default VideoDescription