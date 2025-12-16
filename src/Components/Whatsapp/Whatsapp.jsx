"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./Whatsapp.css";
import logo from "./../../Images/goodWayFavicon.ico";
const Whatsapp = () => {
  return (
    <div className="whatsAppContainer">
      {/* <div className="whatsAppContent">Hello</div> */}
      {/* <a href="https://wa.me/919742232700?text=Hello" >
        <img src={whatsApp} alt="" />
      </a> */}
      <FloatingWhatsApp
        phoneNumber="919148889666"
        accountName="GoodWay Attestation"
        avatar={logo.src} // Optional
        statusMessage="Typically replies within 1 min" // Optional
        chatMessage="Welcome to Goodway Attestation! Need expert attestation services? We’re here to help! Call Now ~ 9148889666" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  );
};

export default Whatsapp;
