import React from "react";
import { GoTrophy } from "react-icons/go";
import "./AboutUs.css";
import exp from "./../../../Images/LpQatarAbt/exp.png";
import docs from "./../../../Images/LpQatarAbt/docs.png";
import govt from "./../../../Images/LpQatarAbt/govt.png";
import trust from "./../../../Images/LpQatarAbt/trust.png";
import Image from "next/image";

export default function AboutUs() {
  const stats = [
    { icon: exp, number: "16", label: "YEARS OF EXPERIENCE" },
    { icon: docs, number: "4LAKH+", label: "DOCUMENTS  PROCESSED" },
    { icon: govt, number: "100%", label: "GOVT APPROVED AND ISO CERTIFIED" },
    { icon: trust, number: "25000+", label: "TRUSTED CUSTOMERS" },
  ];

  // const features = [
  //   {
  //     icon: GoTrophy,
  //     title: "Fast Processing",
  //     description:
  //       "Quick and reliable attestation services with minimal delays.",
  //   },
  //   {
  //     icon: GoTrophy,
  //     title: "Trusted Experts",
  //     description:
  //       "Our team consists of certified professionals with years of expertise.",
  //   },
  //   {
  //     icon: GoTrophy,
  //     title: "Secure Handling",
  //     description:
  //       "Your documents are handled with the utmost security and confidentiality.",
  //   },
  //   {
  //     icon: GoTrophy,
  //     title: "Affordable Pricing",
  //     description:
  //       "We provide the best rates without compromising service quality.",
  //   },
  // ];
  return (
    <section id="aboutus" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* LEFT SIDE */}
          <div className="about-gridWrapper">
            <div className="about-gridContent">
              <div className="about-badge">
                <GoTrophy className="about-badge-icon" />
                About Us
              </div>

              <h2 className="about-heading">
                Trusted Qatar Attestation Partner Since 2010
              </h2>

              <p className="about-text">
                We are the leading Qatar document attestation service provider
                with over a decade of experience. Our expertise, reliability,
                and commitment to customer satisfaction have made us the
                preferred choice for thousands of clients worldwide.
              </p>
            </div>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <Image src={stat.icon} alt={stat.label} className="stat-icon" />

                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-buttons">
            <button className="btn-primary">Learn More About Us</button>
            <button className="btn-outline">View Testimonials</button>
          </div>

          {/* RIGHT SIDE */}
          {/* <div className="about-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <feature.icon className="feature-icon" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h3 className="cta-heading">Need Help with Your Documents?</h3>
          <p className="cta-text">
            Our attestation experts are here to guide you through the entire
            process. Get personalized assistance for your specific requirements.
          </p>
          <div className="cta-buttons">
            <button className="btn-light">Free Consultation</button>
            <button className="btn-white-outline">
            <a href="tel:9148889666">  Call Now: +91 9148889666</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
