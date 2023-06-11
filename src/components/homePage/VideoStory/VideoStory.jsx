import React, { useState, useRef, use } from 'react';
import './videoStory.css'
import image1 from '../../../images/jord2.jpg';
import image2 from '../../../images/amou3hermel.jpg';
import image3 from '../../../images/welcomeToHermel.jpg';
import image4 from '../../../images/imageJord.jpg';
import image5 from '../../../images/destination.png'
import image6 from '../../../images/GalleryRafting.jpg'
import video1 from '../../../videos/224e4e82-52d9-4f5c-9ad2-9801b018f111.MOV';
import video2 from '../../../videos/WhatsApp Video 2023-06-11 at 3.25.51 PM.mp4'
import video3 from '../../../videos/WhatsApp Video 2023-06-11 at 3.29.01 PM.mp4'
import video4 from '../../../videos/WhatsApp Video 2023-06-11 at 3.28.08 PM.mp4'
import video5 from '../../../videos/WhatsApp Video 2023-06-11 at 3.30.58 PM.mp4'
import video6 from '../../../videos/WhatsApp Video 2023-06-11 at 3.32.35 PM.mp4'
function VideoStory() {
    
    
    
    const [selectedVideo, setSelectedVideo] = useState(null);


    const openModal = (videoUrl) => {
        setSelectedVideo(videoUrl);

    };

    const closeModal = () => {
        setSelectedVideo(null);
    };

    const handleVideoClick = (event) => {
        event.stopPropagation(); // Prevent the click event from propagating to the modal
        closeModal();
    };

    const images = [image1, image2, image3, image4, image5, image6];
    const videos = [video1, video2, video3, video4, video5, video6];
    const titles = ['Jord', 'Pyramid', 'Hermel', 'Jord', 'Assi River', 'Rafting'];



    return (
        <div className="video_story">
          <div className="story_container">
            {images.map((image, index) => (
              <div className="story_content" key={index}>
                <div className="img_container">
                  <img src={image} alt={`story${index}`} onClick={() => openModal(videos[index])} />
                </div>
                <div className="text_container">{titles[index]}</div>
              </div>
            ))}
          </div>
    
          {selectedVideo && (
            <div className="modal" onClick={closeModal}>
              <div className="modal_content">
                <div className="video_wrapper">
                  <video src={selectedVideo} controls autoPlay onClick={handleVideoClick} />
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

export default VideoStory;