import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
// import accountIcon from "../../icons/login.png";
// import powerOff from "../../icons/powerOff.png";
import menuBar from '../../icons/menu-bar.png'
import axios from "axios";
import logo from '../../icons/rafting.png'

function Header() {


  const [navbar, setNavbar] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raftinglb.onrender.com/pages");
        setNavbar(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);





  
  const [showPopup, setShowPopup] = useState(false);

  const [loggedOut, setLoggedOut] = useState(false);
  const userInfo = localStorage.getItem("userInfo");

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/login");
  };
  const logoutHandler = () => {
    if (window.confirm("Are you sure to logged out")) {
      localStorage.removeItem("userInfo");
      setLoggedOut(true);
      navigate("/")
    }
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo && loggedOut) {
    }
  }, [loggedOut, userInfo]);
  return (
    <div className="header">
      <div className="header__logo">
        <img className="logo" src={logo} alt="login" />
      </div>
      <div className="header__nav">
        {navbar.map((item, index) => (

          <div key={index} className="header__nav__item">
            <Link to={item.link}>{item.name}</Link>
          </div>


        ))}
      </div>
      <div className="icon_login_explore">
        {!userInfo && (
          <div className="icon_account">
            <Link to='/login'
              className="icon_login"
              onClick={navigateHandler}
            >Login</Link>
          </div>
        )}
        {userInfo && (
          <div className="icon_account">
            <Link to='/'
              className="icon_login"
              onClick={logoutHandler}
            >Logout</Link>
          </div>
        )}
        <div className="explore_btn">
          <a href="/offers" className="explore_btn_header">
            Explore Now
          </a>
        </div>
        <div className="header_icon_sidebar">
          {showPopup && <Popup onClosePopup={closePopup} />}
        </div>
        <div className="header_icon_sidebar">

        </div>

        <div className="menu_bar">
          <img
            className="menu_bar_image"
            onClick={openPopup}
            src={menuBar}
            alt="menuBar"
          />
        </div>




      </div>


    </div>
  );
}

function Popup({ onClosePopup }) {

  const [loggedOut, setLoggedOut] = useState(false);
  const userInfo = localStorage.getItem("userInfo");

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/login");
  };
  const logoutHandler = () => {
    if (window.confirm("Are you sure to logged out")) {
      localStorage.removeItem("userInfo");
      setLoggedOut(true);
      navigate("/")
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo && loggedOut) {
    }
  }, [loggedOut, userInfo]);

  const [navbar, setNavbar] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raftinglb.onrender.com/pages");
        setNavbar(response.data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="popup_sidebar">
      <div className="popup__content">
        <div className="popup_sidebar_button">
          <button className="popup__close" onClick={onClosePopup}>
            X
          </button>
        </div>
        <div className="popup_sidebar_ul">

          <ul className="popup__list">
            {navbar.map((item, index) => (
              <li className="popup_list_li" key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))

            }
          </ul>
          <div className="explore_and_button">
            <div className="explore_and_button__explore">
              <Link to="/offers">Explore</Link>
            </div>
            <div className="explore_and_button__login">
            {!userInfo && (
          <div className="explore_and_button_image">
            <Link
              className="icon_login"
              to="/login"   
              onClick={navigateHandler}
            >Login</Link>
          </div>
        )}
        {userInfo && (
          <div className="explore_and_button_image">
            <Link
              to='/'
              className="icon_login"
              onClick={logoutHandler}
            >Logout</Link>
          </div>
        )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
