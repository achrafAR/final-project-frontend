import React, { useEffect, useState } from "react";
import "./loginSignUp.css";
import BackgroundLogin from "../../images/backgroundLogin.jpg";
import Header from "../Header/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginSignUp() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [activeButton, setActiveButton] = useState("login");

  const toggleForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
    setActiveButton(activeButton === "login" ? "signUp" : "login");
  };

  return (
    <div className="container">
      <Header />
      <div
        className={`form-container ${isLoginFormVisible ? "login" : "signUp"}`}
      >
        {isLoginFormVisible ? (
          <LoginForm toggleForm={toggleForm} activeButton={activeButton} />
        ) : (
          <SignUpForm toggleForm={toggleForm} activeButton={activeButton} />
        )}
      </div>
    </div>
  );
}

function LoginForm({ toggleForm, activeButton }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://raftinglb.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/"); // Redirect to the homePage after successful login
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      // Redirect to the homePage if user is already logged in
      navigate("/");
    }
  }, []);

  return (
    <div className="login_container">
      <div className="login_signUp">
        <div className="login_signUp_button">
          <button
            id="1"
            className={`login_signUp_button_button ${
              activeButton === "login" ? "active" : ""
            }`}
          >
            Login
          </button>
          <button
            id="2"
            className={`login_signUp_button_button ${
              activeButton === "signUp" ? "active" : ""
            }`}
            onClick={toggleForm}
          >
            Sign Up
          </button>
        </div>
        <div className="details-input-container">
          <div className="login_signUp_title">
            <h5>Welcome Back!</h5>
          </div>
          <div className="login_signUp_form">
            <form
              className="login_signUp_button_form_form"
              onSubmit={handlerSubmit}
            >
              <div className="login_signUp_button_form_form_input">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="login_signUp_button_form_form_input">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div className="login_signUp_button_login">
                <button className="login_signUp_button_login_button">
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignUpForm({ toggleForm, activeButton }) {
  return (
    <div className="login_container">
      <div className="login_signUp_singUp">
        <div className="login_signUp_button">
          <button
            className={`login_signUp_button_button ${
              activeButton === "login" ? "active" : ""
            }`}
            onClick={toggleForm}
          >
            Login
          </button>
          <button
            className={`login_signUp_button_button ${
              activeButton === "signUp" ? "active" : ""
            }`}
          >
            Sign Up
          </button>
        </div>
        <div className="details-input-container">
          <div className="login_signUp_title">
            <h5>Sign Up For Free</h5>
          </div>
          <div className="login_signUp_form_form">
            <form className="login_signUp_button_form_form">
              <div className="login_signUp_button_form_form_input">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name *"
                ></input>
              </div>
              <div className="login_signUp_button_form_form_input">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email *"
                ></input>
              </div>
              <div className="login_signUp_button_form_form_input">
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password *"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="login_signUp_button_login_getStarted">
          <button className="login_signUp_button_login_button_getStarted">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
