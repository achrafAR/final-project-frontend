import React from "react";
import Header from "../Header/Header";
import "./MainComp.css";

function MainComp(props) {
  const { title, text, backgroundName } = props;
  return (
    <div className={backgroundName}>
      <Header />
      <div className="mainComp_container">
        <div className="mainComp_title">
          <div className="mainComp_title_title">
            <h5>{title}</h5>
          </div>
          <div className="mainComp_title_description">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComp;
