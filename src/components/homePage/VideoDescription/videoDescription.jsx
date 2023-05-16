import React from 'react'
import video from '../../../images/background.jpeg'
import './videoDescription.css'
import template from '../../../icons/template.svg';


function videoDescription() {
    return (
        <div className='video_description_container'>
            <div className='video_description'>
            <div className='video_description_information'>
                <div className='video_description_information_title'><h2>Condimentum Mattis Pellentesque Dnibus Tortyga
                </h2></div>
                <div className='video_description_information_description'><p>Condimentum Mattis Pellentesque Dnibus Tortyga
                    Malesuada fames ac turpis egestas sed tempus urna et pharetra. Urna duis convallis convallis tellus id interdum velit laoreet id.

                    Diam maecenas ultricies mi eget lobortis elementum tellus molestie odio pellentesque diam volutpat commodo sed egestas egestas.</p></div>
                <div className='blogger'>
                    <div className='blogger_image'>
                        <img src={video} alt='video' />

                    </div>
                    <div className='blogger_details'>
                        <div className='blogger_details_name'><h5>Amelia Simpsons</h5></div>
                        <div className='blogger_details_job'><p>Blogger / Nomad Traveler / Florida


                        </p></div>
                    </div>
                </div>
            </div>
            <div className='video_description_video'>
                <img src={video} alt='video' />
            </div>
        </div>
        </div>
        
    )
}

export default videoDescription