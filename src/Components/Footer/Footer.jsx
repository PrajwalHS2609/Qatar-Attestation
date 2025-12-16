import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa6";

import Link from "next/link";
import logo from "./../../Images/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <Image src={logo} alt="logo" />
          </div>
          <p className="footer-text">
            Your trusted partner for Qatar certificate attestation, offering
            reliable and efficient services for individuals and businesses.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/goodwayattestation"
              className="social-link"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/Goodway_India"
              className="social-link"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/goodwayattestation.india/"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/goodway-attestation/"
              className="social-link"
              aria-label="Indeed"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div> */}

        {/* <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">Educational Certificates</Link>
            </li>
            <li>
              <Link href="/">Marriage Certificates</Link>
            </li>
            <li>
              <Link href="/">Birth Certificates</Link>
            </li>
            <li>
              <Link href="/">HRD Attestation</Link>
            </li>
            <li>
              <Link href="/">Commercial Documents</Link>
            </li>
            <li>
              <Link href="/">Legal Documents</Link>
            </li>
          </ul>
        </div> */}

        <div className="footer-contactColumn">
          <h3 className="footer-contactHeading">Contact</h3>
          <ul className="footer-contactLinks">
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:+9148889666">+91 9148889666</a>
              <a href="tel:+9148889444">+91 9148889444</a>
            </li>
            <li>
              <FaEnvelopeOpenText className="footer-icon" />
              <a href="mailto:info@goodwayattestation.com">
                info@goodwayattestation.com
              </a>
            </li>
            <li>
              <IoLocationSharp className="footer-icon" />
              <a href="https://maps.app.goo.gl/ttkcb8w8fSW8AHTH9">
                #134 (Shop No. 2), 1st Floor, K.N Complex, 11th Cross, Temple
                Street, Opp. Canara Bank, Malleshwaram, Bengaluru - 560003
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Qatar Attestation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
