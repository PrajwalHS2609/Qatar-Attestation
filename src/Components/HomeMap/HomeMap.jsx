import React from "react";
import "./HomeMap.css"
const HomeMap = () => {
  return (
    <div className="homeMap-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.529142408825!2d77.56957647466554!3d13.001940087316193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d588d9caef%3A0x5ba382acaf05e1bd!2sGoodway%20Attestation%20%26%20Apostille%20Services%20in%20Bangalore%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1758615059706!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default HomeMap;
