"use client";
import React, { useState } from "react";
import "./PopUp.css";
import { HiMiniXMark } from "react-icons/hi2";
const PopUp = () => {
  const handleExit = () => {
    document.querySelector(".popup-container").style.display = "none";
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    // API submission logic goes here
  };

  return (
    <div className="popup-container">
      <div className="popup-wrapper">
        {/* Left Side - Image */}
        <div className="popup-content">
          <img
            src="https://images.pexels.com/photos/10919148/pexels-photo-10919148.jpeg"
            alt="popup"
          />
        </div>

        {/* Right Side - Form */}
        <div className="popup-content form-side">
          <div className="popup-exit">
            <HiMiniXMark className="popup-exitIcon" onClick={handleExit} />
          </div>
          <h2>Get in Touch</h2>
          <form className="popup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <input type="subject" placeholder="Subject" required />           
            <textarea placeholder="Your Message" rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
