import React from "react";
import MainComp from "../mainComponent/MainComp";
import MainDivComponent from "../mainDivComponent/mainDivComponent";
import icon from "../../icons/youtube.png";
import assiMap from "../../images/assiMap.png";
import "./contactUs.css";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";
// import emailjs from '@emailjs/browser';
import { useEffect } from "react";

function ContactUs() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_dwg8x0a",
    //     "template_srb2aut",
    //     formRef.current,
    //     "SvfqYlAZDBTRKlpnH"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="contactUs_container">
      <MainComp
        title="Contact Us"
        text="Battikh"
        backgroundName="contactUs_hero"
      />
      <MainDivComponent
        title="hello"
        description="helloooooooooooooo"
        src={icon}
      />
      <div className="contactUs_container_map_form">
        <div className="contactUs_container_map">
          <img src={assiMap} alt="Map" />
        </div>
        <div className="contact_container_form">
          <h5>We’d love To Hear From You!</h5>
          <form ref={formRef}>
            <label>First & Last Name *</label>
            <input type="text" className="input_field" id="name" name="name" />
            <label>Email Address *</label>
            <input type="text" className="input_field" />
            <label>Subject</label>
            <input type="text" className="input_field" />
            <label>Comment or Message</label>
            <input type="text" className="last_input" />
            <button onClick={sendEmail}>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
