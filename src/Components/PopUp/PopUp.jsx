"use client";
import React, { useState } from "react";
import "./PopUp.css";
import { HiMiniXMark } from "react-icons/hi2";
import Swal from "sweetalert2";
const PopUp = () => {
  const handleExit = () => {
    document.querySelector(".popup-container").style.display = "none";
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "f333e4b3-a1ed-4165-a06a-0db699456e2d");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
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
          <form className="popup-form" onSubmit={onSubmit}>
            <input type="text" name="Full Name" placeholder="Full Name" required />
            <input type="tel" name="Phone Number" placeholder="Phone Number" required />
            <input type="email" name="Email" placeholder="Email Address" required />
            <input type="subject" name="Booking-Subject" placeholder="Subject" required />           
            <textarea name="Message" placeholder="Your Message" rows="4"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
