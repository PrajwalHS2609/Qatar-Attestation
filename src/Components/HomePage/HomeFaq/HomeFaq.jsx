"use client";
import React from "react";
import "./HomeFaq.css";
import Accordion from "react-bootstrap/Accordion";
import faq from "@/Images/faq.jpg";
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
                <h5>1. What is UAE attestation and why is it required?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  {" "}
                  UAE attestation is the official verification of Indian-issued
                  documents to make them legally valid for employment,
                  education, business, and residency purposes in the UAE.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="1">
              <Accordion.Header className="homeFaq-accHeader">
                <h5> 2. Which documents require UAE attestation?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Educational certificates, personal documents (birth, marriage,
                  PCC), and commercial papers (MOA, POA, invoices) require UAE
                  attestation based on the purpose of use.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="2">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>3. How long does UAE attestation take in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  UAE attestation typically takes 5 working days, depending on
                  the document type and issuing authority.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="3">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>4. What is the cost of UAE attestation in Bangalore?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  The cost usually ranges from ₹5,000 to ₹15,000, depending on
                  whether the document is educational, personal, or commercial.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="4">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>5. Is UAE attestation mandatory for employment visas? </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Yes, UAE attestation is mandatory for employment visas and
                  professional licensing in the UAE.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="5">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>6. Who issues UAE attestation in India?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  UAE attestation is completed through State HRD/SDM, Ministry
                  of External Affairs (MEA), and the UAE Embassy, followed by
                  MOFA in the UAE if required.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="6">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>
                  7. Can I do UAE attestation without visiting government
                  offices?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Yes, authorized agencies like Goodway Attestation provide
                  complete doorstep services, including document pickup,
                  processing, and delivery.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="homeFaq-accItem" eventKey="7">
              <Accordion.Header className="homeFaq-accHeader">
                <h5>8. What happens if documents are not properly attested?</h5>
              </Accordion.Header>
              <Accordion.Body className="homeFaq-body">
                <p>
                  Improper or incomplete attestation can lead to visa rejection,
                  job offer cancellation, or legal issues in the UAE.
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
