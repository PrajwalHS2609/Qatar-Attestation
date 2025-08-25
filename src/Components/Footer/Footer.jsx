import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <div class="footer-logo">Qatar Attestation</div>
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

        <div class="footer-column">
          <h3 class="footer-heading">Contact</h3>
          <ul class="footer-links">
            <li>
              <a href="tel:+12345678900">+1 234 567 8900</a>
            </li>
            <li>
              <a href="mailto:info@qatarattestation.com">
                info@qatarattestation.com
              </a>
            </li>
            <li>Doha, Qatar</li>
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
