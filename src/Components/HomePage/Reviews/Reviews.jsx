import React from "react";
import "./Reviews.css";
import { MdOutlineReviews } from "react-icons/md";

const Reviews = () => {
  return (
    <div className="qatarReviews-container">
      <div className="qatarReviews-heading">
        <h4>
          <MdOutlineReviews />
          Reviews
        </h4>
        <h2>What Our Customers Says</h2>
      </div>
      <div className="qatarReviews-content">
        <iframe
          src="https://widgets.sociablekit.com/google-reviews/iframe/25569316"
          frameborder="0"
          width="100%"
          height="1000"
          title="lp qatar review"
        ></iframe>
      </div>
    </div>
  );
};

export default Reviews;
