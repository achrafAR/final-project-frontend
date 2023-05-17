import React from "react";
import "./galleryHomePage.css";
import galleryMain from "../../../images/background.jpeg";

function galleryHomePage() {
    const gallery = {
        images: [galleryMain, galleryMain, galleryMain, galleryMain, galleryMain],
    };
    return (
        <div className="gallery_home_page_container">
            <div className="gallery_home_page_title">
                    <p>Trips Gallery</p>
                    <h2>Completed Journey</h2>
                </div>
            <div className="gallery_home_page">
                {gallery.images.map((image, index) => (
                    <div className="image_container" key={index}>
                        <img key={index} src={image} alt="#" className={`image`} />
                        <div className="will-flow">
                            <h2 className="title">RAFTING</h2>
                            <button className="button">Show More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default galleryHomePage;
