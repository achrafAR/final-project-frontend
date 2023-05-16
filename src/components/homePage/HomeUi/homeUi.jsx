import React from "react";
import "./homeUi.css";
import Header from "../../Header/Header";
import Features from "../Features/Features";

function HomeUi() {
  return (
    <div className="hero">
      <Header />
      <div className="title_description">
        <div className="title_description_button">
          <div className="title_homeUi">
            <h2>Easy To Arrive Hard To Leave !</h2>
          </div>
          <div className="desc_homeUi">
            <p>rafting is one of the best activity in lebanon.in hermel at the assi
            river its this activity u can do it without affraid and bla bla bla
            bla bla bla bla bla bla</p>
          </div>
          <div className="btn_homeUi">
            <a href="www.google.com">Start Now</a>
          </div>
        </div>
        <Features />
      </div>
    </div>
  );
}

export default HomeUi;
