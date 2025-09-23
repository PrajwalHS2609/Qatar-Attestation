import React from "react";
import "./ContactUs.css";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      {/* Left Section - Contact Info */}
      <div className="contact-info">
        <h3 className="info-title">Contact Us</h3>
        <p className="info-item">
          <FaPhoneAlt className="info-icon" />{" "}
          <a href="tel:9148889666">+91 9148889666</a> ,{" "}
          <a href="tel:9148889444">+91 9148889444</a>
        </p>
        <p className="info-item">
          <FaEnvelope className="info-icon" /> info@goodwayattestation.com
        </p>
        <p className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <span>
            #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple
            Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003
          </span>
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="contact-form-box">
        <h3 className="contact-form-title">Send Us a Message</h3>

        <form className="contact-form">
          <div className="form-grid">
            <div>
              <label className="form-label">First Name</label>
              <input type="text" className="form-input" placeholder="John" />
            </div>
            <div>
              <label className="form-label">Last Name</label>
              <input type="text" className="form-input" placeholder="Doe" />
            </div>
          </div>

          <div className="form-grid">
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Document Type</label>
            <select className="form-input">
              <option>Select document type</option>
              <option>Educational Certificate</option>
              <option>Marriage Certificate</option>
              <option>Birth Certificate</option>
              <option>Experience Certificate</option>
              <option>Commercial Documents</option>
              <option>Legal Documents</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="form-label">Message</label>
            <textarea
              rows={5}
              className="form-input"
              placeholder="Please describe your attestation requirements..."
            ></textarea>
          </div>

          <div className="form-checkbox-group">
            <input type="checkbox" id="consent" className="form-checkbox" />
            <label htmlFor="consent" className="form-checkbox-label">
              I agree to receive communications about my attestation request
            </label>
          </div>

          <span className="btn-container">
            <button type="submit" className="form-button">
              Send Message
              <IoIosSend className="form-button-icon" />
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
