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

  const [addUser, setAddUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = async (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    let fieldValue = event.target.value;

    const newFormData = { ...addUser };
    newFormData[fieldName] = fieldValue;

    setAddUser(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hi9')
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const data = {
      userName: addUser.userName,
      email: addUser.email,
      password: addUser.password,
    };

    const config = {
      headers: { "content-type": "application/json" },
    };

    console.log(data);

    axios
      .post("https://raftinglb.onrender.com/user", data, config)
      .then((response) => {
        setAddUser([...addUser, response.data]);
        window.alert("review created successfully!");

        document.querySelector('input[name="userName"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('input[name="password"]').value = "";

        setAddUser({ userName: "", email: "", password: "" });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };





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
            <form className="login_signUp_button_form_form" >
              <div className="login_signUp_button_form_form_input">
                <input
                  type="text"
                  id="fullName"
                  name="userName"
                  placeholder="Full Name *"
                  onChange={handleChange}


                ></input>
              </div>
              <div className="login_signUp_button_form_form_input">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  onChange={handleChange}

                ></input>
              </div>
              <div className="login_signUp_button_form_form_input">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password *"
                  onChange={handleChange}

                ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="login_signUp_button_login_getStarted">
          <button className="login_signUp_button_login_button_getStarted" onSubmit={handleSubmit}>
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
