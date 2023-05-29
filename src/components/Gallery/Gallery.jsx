import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Gallery.css";
import MainComp from "../mainComponent/MainComp";
import Footer from "../Footer/Footer";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import Image from "../../images/destination.png";

function App() {
  return (
    <div className="gallery">
      <MainComp title="About Us" text="Battikh" backgroundName="aboutUs_hero" />
      <div className="container_slider">
        <h1 className="heading">Rafting Gallery</h1>
        <div className="gallery_container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"3"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon className="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon className="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
