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
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <div class="footer-logo">
            <Image src={logo} alt="logo" />
          </div>
          <p class="footer-text">
            Your trusted partner for Qatar certificate attestation, offering
            reliable and efficient services for individuals and businesses.
          </p>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/goodwayattestation"
              class="social-link"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/Goodway_India"
              class="social-link"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/goodwayattestation.india/"
              class="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/goodway-attestation/"
              class="social-link"
              aria-label="Indeed"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contactColumn">
          <h3 className="footer-contactHeading">Contact</h3>
          <ul className="footer-contactLinks">
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a href="tel:+919148889666">+91 9148889666</a>
            </li>
            <li>
              <FaEnvelopeOpenText className="footer-icon" />
              <a href="mailto:info@goodwayattestation.com">
                info@goodwayattestation.com
              </a>
            </li>
            <li>
              <IoLocationSharp className="footer-icon" />
              <a href="#">
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
