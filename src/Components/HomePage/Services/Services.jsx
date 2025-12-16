"use client"
import React from "react";
import "./Services.css";
import { FaUserGraduate } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Services = () => {
  const handlePop = () => {
    document.querySelector(".popup-container").style.display = "flex";
  };
  const services = [
    {
      icon: FaUserGraduate,
      title: "Educational Certificates",
      description:
        "Degree certificates, diplomas, transcripts, and academic records attestation for Qatar.",
      features: [
        "Degree Certificates",
        "Diploma Attestation",
        "Transcripts",
        "Academic Records",
      ],
      price: "From $99",
      time: "2-3 Days",
    },
    {
      icon: FaHeart,
      title: "Marriage Certificates",
      description:
        "Marriage certificate attestation for family visa and spousal sponsorship in Qatar.",
      features: [
        "Marriage Certificates",
        "Divorce Decrees",
        "Family Documents",
        "Relationship Proof",
      ],
      price: "From $89",
      time: "1-2 Days",
    },
    {
      icon: FaBaby,
      title: "Birth Certificates",
      description:
        "Birth certificate attestation for children and family reunification purposes.",
      features: [
        "Birth Certificates",
        "Adoption Papers",
        "Child Documents",
        "Age Proof",
      ],
      //   price: "From $79",
      time: "1-2 Days",
    },
    {
      icon: FaBriefcase,
      title: "HRD Attestation",
      description:
        "Unlock international business opportunities with our efficient Commercial Document Attestation services.",
      features: [
        "Experience Letters",
        "Salary Certificates",
        "NOC Documents",
        "Job Letters",
      ],
      price: "From $69",
      time: "1-2 Days",
    },
    {
      icon: FaBuilding,
      title: "Commercial Documents",
      description:
        "Business documents attestation for companies and commercial purposes.",
      features: [
        "Trade License",
        "MOA/AOA",
        "Power of Attorney",
        "Commercial Invoices",
      ],
      price: "From $149",
      time: "3-4 Days",
    },
    {
      icon: FaFileAlt,
      title: "Legal Documents",
      description:
        "Legal document attestation including affidavits, agreements, and contracts.",
      features: ["Affidavits", "Agreements", "Contracts", "Legal Certificates"],
      price: "From $119",
      time: "2-3 Days",
    },
  ];
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <FaStar className="icon small" />
            Our Services
          </div>
          <h2>Comprehensive Qatar Attestation Services</h2>
          <p>
            We provide professional attestation services for all types of
            documents required for Qatar. Fast, secure, and reliable processing
            with expert guidance.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-bg"></div>

              <div className="card-content">
                <div className="card-header">
                  <service.icon className="iconServiceLarge" />
                  {/* <div className="price-box">
                    <div className="price">{service.price}</div>
                    <div className="time">
                      <FaClock className="icon tiny" />
                      {service.time}
                    </div>
                  </div> */}
                </div>

                <h3>{service.title}</h3>
                <p className="description">{service.description}</p>

                <div className="features-list">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="dot"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="btn-primary w-full" onClick={handlePop}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <p>Need attestation for other documents?</p>
          <button className="btn-outline" onClick={handlePop}>Request Custom Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
