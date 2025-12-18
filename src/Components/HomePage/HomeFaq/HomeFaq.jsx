"use client";
import React from "react";
import "./HomeFaq.css";
import Accordion from "react-bootstrap/Accordion";
import faq from "@/Images/faq.png";
import Image from "next/image";
const HomeFaq = () => {
  return (
    <div className="homeFaq-container">
      <div className="homeFaq-wrapper">
        <div className="homeFaq-content">
          <h2>Frequently Asked Questions</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="homeFaq-accItem" eventKey="0">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>1. What is Qatar attestation and why is it required?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Qatar attestation is the official verification of
                  Indian-issued documents to make them legally valid for
                  employment, education, business, and residency purposes in
                  Qatar.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="1">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>2. Which documents require Qatar attestation?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Educational certificates, personal documents such as birth and
                  marriage certificates, and commercial documents like MOA, POA,
                  and company invoices require Qatar attestation.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="2">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>3. How long does Qatar attestation take in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Qatar attestation usually takes around 5 working days,
                  depending on the document type and the issuing authority.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="3">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>4. What is the cost of Qatar attestation in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  The cost generally ranges from ₹5,000 to ₹15,000, based on the
                  type of document and processing requirements.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="4">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>5. Is Qatar attestation mandatory for employment visas?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Yes, Qatar attestation is mandatory for employment visas and
                  professional contracts issued by employers in Qatar.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="5">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>6. Who issues Qatar attestation in India?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Qatar attestation is carried out through State HRD or SDM, the
                  Ministry of External Affairs (MEA), and the Qatar Embassy,
                  followed by MOFA attestation in Qatar if required.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="6">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  7. Can I complete Qatar attestation without visiting
                  government offices?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Yes, government-approved agencies like Goodway Attestation
                  offer complete doorstep services, including document pickup,
                  processing, and delivery.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="7">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  8. What happens if documents are not properly attested for
                  Qatar?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Incorrect or incomplete attestation may result in visa
                  rejection, job offer cancellation, or legal issues in Qatar.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="homeFaq-content">
          <Image src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
