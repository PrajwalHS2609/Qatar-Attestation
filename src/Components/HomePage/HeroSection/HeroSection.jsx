import React from "react";
import { FiShield } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import "./HeroSection.css";
import embassyLogo from "./../../../Images/QatarHeader.png";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="coverImg">
        <img
          src="https://images.pexels.com/photos/3703813/pexels-photo-3703813.jpeg"
          alt=""
        />
      </div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge">
              <FiShield className="icon small" />
              Trusted Attestation Services
            </div>

            <h1 className="hero-title">
              Qatar Document <br />
              <span className="highlight">Attestation</span>
              <span className="subtitle">Made Simple & Secure</span>
            </h1>

            <p className="hero-desc">
              Professional document attestation services for Qatar. We handle
              all types of certificates, degrees, and legal documents with 100%
              authenticity guarantee and fast processing.
            </p>

            <div className="headercta-buttons">
              <button className="headerctabtn-primary">
                Start Your Attestation
                <GoArrowRight className="icon arrow" />
              </button>
              <button className="headerctabtn-outlines">View Services</button>
            </div>

            <div className="features">
              <div className="feature">
                <img
                  src="https://mea-apostille.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F11.0defda10.png&w=640&q=75"
                  alt=""
                />
                {/* <FaClock className="iconLarge" />
                <div className="feature-title">24-48 Hours</div>
                <div className="feature-desc">Fast Processing</div> */}
              </div>
              <div className="feature">
                <img
                  src="https://mea-apostille.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F13.fb0c1476.png&w=640&q=75"
                  alt=""
                />

                {/* <FiShield className="iconLarge" />
                <div className="feature-title">100% Secure</div>
                <div className="feature-desc">Document Safety</div> */}
              </div>
              <div className="feature">
                <img
                  src="https://mea-apostille.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F12.2d16e05e.png&w=640&q=75"
                  alt=""
                />

                {/* <PiMedalFill className="iconLarge" />
                <div className="feature-title">Guaranteed</div>
                <div className="feature-desc">Authenticity</div> */}
              </div>
              <div className="feature">
                <img
                  src="https://mea-apostille.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F14.dd883bef.png&w=640&q=75"
                  alt=""
                />

                {/* <PiMedalFill className="iconLarge" />
                <div className="feature-title">Guaranteed</div>
                <div className="feature-desc">Authenticity</div> */}
              </div>
            </div>
          </div>

          <div className="embassy-wrapper">
            <Image src={embassyLogo} alt="embassy Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
