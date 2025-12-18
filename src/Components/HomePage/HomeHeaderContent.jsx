import React from "react";
import "@/Components/style.css";

const HomeHeaderContent = () => {
  return (
    <div className="contentHead">
      <div className="contentHead-wrapper">
        <div className="contentHead-content">
          <h1>Qatar Attestation in Bangalore at Best Price</h1>
          <p>
            {" "}
            If you are planning to work, pursue higher education, start a
            business, or relocate to Qatar, completing Qatar Attestation in
            Bangalore is a mandatory legal requirement. Attestation ensures that
            your Indian-issued documents are officially recognized and accepted
            by authorities in Qatar for employment, education, residency, or
            commercial purposes. Without proper attestation, documents may be
            rejected, leading to delays or complications in visa processing and
            approvals.
          </p>
          <p>
            Goodway Attestation is a government-approved attestation agency with
            over 16 years of proven process expertise, offering reliable, fast,
            and secure Qatar attestation services in Bangalore. With in-depth
            knowledge of attestation procedures and continuous updates on
            embassy regulations, we ensure that every document is processed
            accurately and efficiently. Our focus is on delivering a smooth,
            stress-free experience with guaranteed timelines and complete
            transparency.
          </p>
          <p>
            Trusted by 12,000+ satisfied customers, Goodway Attestation has
            built a strong reputation for professionalism and consistency. We
            are also an exclusive attestation partner for more than 28 leading
            Indian MNCs in Bangalore, providing end-to-end support for
            individual professionals as well as corporate and HR documentation
            requirements. This long-standing trust reflects our commitment to
            quality service, secure handling of documents, and dependable
            delivery.
          </p>
          <p>
            We provide comprehensive Qatar Attestation in Bangalore for all
            types of documents, including Educational Certificates (degree,
            diploma, and academic records), Personal Certificates (birth,
            marriage, PCC, and related documents), and Commercial Certificates
            (business, legal, and trade-related documents). Each document is
            handled with strict confidentiality and care.
          </p>
          <p>
            Our attestation process strictly follows the latest guidelines
            issued by the Ministry of External Affairs (MEA), Government of
            India, along with the Qatar Embassy and the Qatar Ministry of
            Foreign Affairs (MOFA). By adhering to official procedures and
            verified workflows, we ensure error-free processing and smooth
            acceptance of your documents in Qatar.
          </p>
          <p>
            With dedicated support, secure document handling, and real-time
            updates, Goodway Attestation remains the preferred choice for Qatar
            Attestation in Bangalore. Whether you are an individual professional
            or a corporate client, we are committed to making your attestation
            process simple, reliable, and hassle-free.
          </p>
        </div>
        <div className="highlight-section">
          {/* Duration Highlight */}
          <div className="highlight-card">
            <h3>🚀 Duration – UAE Attestation in Just 5 Days</h3>
            <ul>
              <li>
                <strong>Standard Processing Time:</strong> 5 Working Days
              </li>
              <li className="note">
                (Duration may vary depending on document type & issuing
                authority)
              </li>
            </ul>
            <p>
              Our strong coordination with government departments and 16+ years
              of experience ensure faster turnaround with{" "}
              <strong>guaranteed delivery</strong>.
            </p>
          </div>

          {/* Pickup Highlight */}
          <div className="highlight-card">
            <h3>⚡ 1-Hour Document Collection across Bangalore</h3>
            <p>
              We offer express document pickup within <strong>1 hour</strong>{" "}
              from 60+ localities, including:
            </p>
            <p className="locations">
              Whitefield, Electronic City, Marathahalli, Bellandur, Indiranagar,
              Jayanagar, Yelahanka, Rajajinagar, Hebbal, Malleshwaram, BTM, HSR,
              Banashankari & more.
            </p>
            <p className="highlight-text">
              No travel. No waiting. Complete convenience.
            </p>
          </div>
        </div>
        <div className="usp-section">
          <h2 className="usp-heading">
            Our USPs – Why Goodway Attestation Is #1 in Bangalore
          </h2>

          <div className="usp-column">
            {[
              "16 Years of Process Expertise",
              "Government Approved Attestation Agency",
              "Authorized by MEA & UAE Authorities",
              "Trusted by 12,000+ Happy Customers",
              "Exclusive Partner of 28+ Top Indian MNCs in Bangalore",
              "Secure Document Handling & Confidentiality",
              "Live Progress Tracking & Regular Updates",
              "Guaranteed Delivery Commitment",
              "1-Hour Document Collection from 60+ Bangalore Localities",
              "Dedicated Relationship Manager for Every Case",
            ].map((item, index) => (
              <div key={index} className="usp-card">
                <span className="usp-icon">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderContent;
