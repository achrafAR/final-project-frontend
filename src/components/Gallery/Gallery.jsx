import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Gallery.css'
import MainComp from "../mainComponent/MainComp";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';





export default function Gallery() {

  const [generalGalleries, serGeneralGalleries] = useState([])
  const [clickedImage, setClickedImage] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raftinglb.onrender.com/generalGallery");
        serGeneralGalleries(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const galleryDescriptions = [
    "popular worldwide and has become a popular adventure sport and tourist attraction in many regions with suitable rivers and water bodies.",
    "The largest river in Lebanon.Its starts from Hermel region and is characterized by its extreme coldness and abundance ",
    "Amazingly, this mountainous road is on of the most maintained roads in Lebanon with Juniperus trees all over the place.",
    "One of the Oldest Cities in Lebanon. The River, The Mountains, The Ruins, The Juniper Trees",
  ];

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplaySpeed: 2000,


    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const getGallerySettings = (galleryIndex) => {
    if (galleryIndex === 1 || galleryIndex === 3) {
      return {
        ...settings,
        autoplay: true,
        slidesToShow:4
      };
    }
    return settings;
  };



  function getSlidesToShow() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const openPopup = (image) => {
    setClickedImage(image);
  };

  const closePopup = () => {
    setClickedImage(null);
  };


  return (



    <div className='gallery'>
      <MainComp title="Gallery" text="Battikh" backgroundName="gallery_hero" />
      
      {generalGalleries && generalGalleries.map((gallery, index) => (


        <div key={index} className='gallery_carousel'>
          <div className='gallery_title'>
            <h2>{gallery.title}
            <p>{galleryDescriptions[index]}</p>
          </h2>
          </div>



      <Slider {...getGallerySettings(index)} className='gallery_slider'>
        {gallery.image.map((image, imageIndex) => (

          <div className='gallery_images' key={imageIndex}>
            <img src={image} alt="destination" className='gallery_image'                  
            onClick={() => openPopup(image)}
/>
          </div>
        ))}
          
        </Slider>
        {clickedImage && (
            <div className="popup">
              <div className="popup_content">
                <img src={clickedImage} alt="Clicked Image" className="popup_image" />
                <button className="popup_close" onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
      </div>
        

      ))}
      {clickedImage && (
        <div className="popup">
          <div className="popup_content">
            <img src={clickedImage} alt="Clicked Image" className="popup_image" />
            <button className="popup_close" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}




















