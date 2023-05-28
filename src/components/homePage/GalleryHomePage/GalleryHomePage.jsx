import React, {useState, useEffect} from "react";
import axios from "axios";
import "./galleryHomePage.css";
import galleryMain from "../../../images/background.jpeg";
import { useNavigate } from "react-router-dom";

function GalleryHomePage() {
  const navigate = useNavigate();

  const showAllGallery = () => {
    navigate('/gallery')
  };


  const [galleryHomePage, setGalleryHomePage] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/galleryHomePage");
                setGalleryHomePage(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

  return (
    <div className="gallery_home_page_container">
      <div className="gallery_home_page_title">
        <p>Trips Gallery</p>
        <h2>Completed Journey</h2>
      </div>
      <div className="gallery_home_page">
        {galleryHomePage.map((gallery, index) => (
          <div className="image_container" key={index}>
            <img key={index} src={gallery.image} alt="#" className={`image`} />
            <div className="will-flow">
              <h2 className="title">{gallery.title}</h2>
              <button className="button" onClick={showAllGallery}>
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryHomePage;
