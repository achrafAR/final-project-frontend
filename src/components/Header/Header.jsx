import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
import accountIcon from "../../icons/login.png";
function Header() {
  const navbar = [
    { name: "HOME", link: "/" },
    { name: "OFFERS", link: "/offers" },
    { name: "ABOUT US", link: "/aboutUs" },
    { name: "CONTACT US", link: "/contactUs" },
  ];

  return (
    <div className="header">
      <div className="header__logo">
        <img className="logo" src={accountIcon} alt="login" />
      </div>
      <div className="header__nav">
        {navbar.map((item, index) => (
          <div key={index} className="header__nav__item">
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className="icon_login_explore">
        <div className="icon_account">
          <img className="icon_login" src={accountIcon} alt="login" />
        </div>
        <div className="explore_btn">
          <a href="www.google.com" className="explore_btn_header">
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
