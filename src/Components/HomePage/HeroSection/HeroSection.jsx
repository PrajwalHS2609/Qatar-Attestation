"use client"
import React from "react";
import { FiShield } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import "./HeroSection.css";
import embassyLogo from "./../../../Images/QatarHeader.png";
import heroSectionImg from "./../../../Images/herosectionImg.jpg";
import iso from "../../../Images/headerIcos/11.png";
import govtApp from "../../../Images/headerIcos/12.png";
import support from "../../../Images/headerIcos/13.png";
import expertise from "../../../Images/headerIcos/14.png";
import Image from "next/image";
const HeroSection = () => {
    const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  return (
    <section className="hero-section" id="home">
      <div className="coverImg">
        <Image src={heroSectionImg} alt="hero Section Img" />
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
              <button className="headerctabtn-primary" onClick={handlePop}>
                Talk to Expert
                <GoArrowRight className="icon arrow" />
              </button>
              <a href="tel:9148889444">
                <button className="headerctabtn-outlines">Call Now</button>
              </a>
            </div>

            <div className="features">
              <div className="feature">
                <Image
                  src={iso}
                  alt="iso"
                />
                {/* <FaClock className="iconLarge" />
                <div className="feature-title">24-48 Hours</div>
                <div className="feature-desc">Fast Processing</div> */}
              </div>
              <div className="feature">
                <Image
                  src={govtApp}
                  alt="govtApp"
                />

                {/* <FiShield className="iconLarge" />
                <div className="feature-title">100% Secure</div>
                <div className="feature-desc">Document Safety</div> */}
              </div>
              <div className="feature">
                <Image
                  src={support}
                  alt="support"
                />

                {/* <PiMedalFill className="iconLarge" />
                <div className="feature-title">Guaranteed</div>
                <div className="feature-desc">Authenticity</div> */}
              </div>
              <div className="feature">
                <Image
                  src={expertise}
                  alt="expertise"
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
