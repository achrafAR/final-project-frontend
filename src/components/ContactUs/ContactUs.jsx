import React from "react";
import MainComp from "../mainComponent/MainComp";
import MainDivComponent from "../mainDivComponent/mainDivComponent";
import "./contactUs.css";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { useEffect, useState } from "react";
import axios from "axios";

function ContactUs() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dwg8x0a",
        "template_srb2aut",
        formRef.current,
        "SvfqYlAZDBTRKlpnH"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };





  const [contactUsMain, setContactUsMain] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/contactUsMain");
                setContactUsMain(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [contactUsDetails, setContactUsDetails] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/contactUsDetails");
                setContactUsDetails(response.data.data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

  return (
    <div className="contactUs_container">
      {contactUsMain.length > 0 && (
          <MainComp
          title={contactUsMain[0].title}
          text={contactUsMain[0].description}
          backgroundName={contactUsMain[0].backgroundName}
          
        />
      )}


      <div className="contactUs_details_maindiv">
      {contactUsDetails.map((contactUsDetails,index) => {
        return (
          <MainDivComponent
        title={contactUsDetails.title}
        description={contactUsDetails.description}
        src={contactUsDetails.image}
      />
        )
      })}
      </div>
      <div className="contactUs_container_map_form">
        <div className="contactUs_container_map">
        <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=dardara%20Assi%20river+(dardara)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>

        </div>
        <div className="contact_container_form">
          <h5>We’d love To Hear From You!</h5>
          <form ref={formRef}>
            <label>First & Last Name *</label>
            <input type="text" className="input_field" id="name" name="name" />
            <label>Email Address *</label>
            <input type="text" className="input_field" name="email" />
            <label>Subject</label>
            <input type="text" className="input_field" name="subject" />
            <label>Comment or Message</label>
            <input type="text" className="last_input" name="message" />
            <button onClick={sendEmail}>Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
