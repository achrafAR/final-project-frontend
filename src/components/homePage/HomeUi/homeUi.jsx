import React, { useState, useEffect } from "react";
import "./homeUi.css";
import axios from "axios";
import Header from "../../Header/Header";
import Features from "../Features/Features";
import { useNavigate } from "react-router-dom";

function HomeUi() {

  const [homeUi, setHomeUi] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/homeUi");
        setHomeUi(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);









  const navigate = useNavigate();
  const offerNavigate = () => {
    navigate('/offers')
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${homeUi.length > 0 ? homeUi[0].image : ""})`,
  };

  return (
    <div className="hero" style={backgroundImageStyle}>
      <Header />
      <div className="title_description">
        {
          homeUi.map((homeUi, index) => {
            return (
              <div className="title_description_button">
                <div className="title_homeUi">
                  <h2>{homeUi.title}</h2>
                </div>
                <div className="desc_homeUi">
                  <p>
                    {homeUi.description}
                  </p>
                </div>
                <div className="btn_homeUi">
                  <a href="/offers" onClick={offerNavigate}>
                    Start Now
                  </a>
                </div>
              </div>
            )
          })
        }

        <Features />
      </div>
    </div>
  );
}

export default HomeUi;
