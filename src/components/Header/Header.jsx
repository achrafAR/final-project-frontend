import React from "react";
import "./header.css";
import accountIcon from "../../icons/login.png";
function Header() {
  const navbar = [
    { name: "HOME", link: "/" },
    { name: "OFFERS", link: "/" },
    { name: "ABOUT US", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];

  return (
    <div className="header">
      <div className="header__logo">
        <img className="logo" src={accountIcon} alt="login" />
      </div>
      <div className="header__nav">
        {navbar.map((item, index) => (
          <div key={index} className="header__nav__item">
            <a href={item.link}>{item.name}</a>
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
