import React from "react";
import "./WhyUs.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import care from "./../../../Images/LpWhyChoose/24X7.png";
import efficiency from "./../../../Images/LpWhyChoose/efficiency.png";
import expertise from "./../../../Images/LpWhyChoose/expertise.png";
import govApprove from "./../../../Images/LpWhyChoose/govtAppov.png";
import international from "./../../../Images/LpWhyChoose/international.png";
import legal from "./../../../Images/LpWhyChoose/legal.png";
import price from "./../../../Images/LpWhyChoose/pricing.png";
import secure from "./../../../Images/LpWhyChoose/secure.png";
import time from "./../../../Images/LpWhyChoose/timeDelivery.png";
import track from "./../../../Images/LpWhyChoose/tracking.png";
import transparent from "./../../../Images/LpWhyChoose/transparency.png";
import trust from "./../../../Images/LpWhyChoose/trusted.png";
import Image from "next/image";

const WhyUs = () => {
  const steps = [
    {
      title: "24x7 Customer Support",
      description: "We collect your documents securely for verification.",
      icon: care,
      details: ["Free pickup available", "Secure handling"],
    },
    {
      title: "Efficiency",
      description: "Our experts verify your documents with authorities.",
      icon: efficiency,
      details: ["Quick validation", "100% secure process"],
    },
    {
      title: "Expertise",
      description: "Documents are attested by relevant authorities.",
      icon: expertise,
      details: ["Government approved", "International validity"],
    },
    {
      title: "Government Approved",
      description: "Get your attested documents delivered safely.",
      icon: govApprove,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "International Reach",
      description: "Get your attested documents delivered safely.",
      icon: international,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "Legal Compliance",
      description: "Get your attested documents delivered safely.",
      icon: legal,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "Competitive Pricing",
      description: "Get your attested documents delivered safely.",
      icon: price,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "Delivery",
      description: "Get your attested documents delivered safely.",
      icon: secure,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "Free Home Pickup and Timely Delivery",
      description: "Get your attested documents delivered safely.",
      icon: time,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "Secure Handling",
      description: "Get your attested documents delivered safely.",
      icon: track,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "Transparency",
      description: "Get your attested documents delivered safely.",
      icon: transparent,
      details: ["Fast delivery", "Doorstep service"],
    },
    {
      title: "Trusted by Clients",
      description: "Get your attested documents delivered safely.",
      icon: trust,
      details: ["Fast delivery", "Doorstep service"],
    },
  ];
  return (
    <section id="why" className="process-section">
      <div className="process-container">
        <div className="process-header">
          <div className="process-tag">
            <IoMdCheckmarkCircleOutline className="icon-small" />
            Simple Process
          </div>
          <h2>How Qatar Attestation Works</h2>
          <p>
            Our streamlined 4-step process ensures your documents are processed
            quickly and securely with complete transparency at every stage.
          </p>
        </div>

        <div className="process-steps-wrapper">
          <div className="progress-line"></div>
          <div className="progress-line-active"></div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-card">
                  <div className="process-card-top">
                    <div className="process-icon">
                      <Image
                        src={step.icon}
                        className="icon-medium"
                        alt={step.title}
                      />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <div className="process-details">
                    {/* {step.details.map((detail, idx) => (
                      <div key={idx} className="process-detail">
                        <IoMdCheckmarkCircleOutline className="icon-tiny" />
                        {detail}
                      </div>
                    ))} */}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="process-arrow">
                    {/* <GoArrowRight className="icon-arrow" /> */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="process-cta">
          <h3>Ready to Start?</h3>
          <p>
            Begin your Qatar document attestation process today. Our experts are
            ready to guide you through every step.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              Start Attestation Process
              <GoArrowRight className="icon-arrow-btn" />
            </button>
            <button className="btn-secondary">Talk to Expert</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
