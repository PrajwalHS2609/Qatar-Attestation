"use client";
import React from "react";
import "./HomeCounter.css";
import CountUp from "react-countup";

const HomeCounter = () => {
  return (
    <div className="homeCounter-container">
      <div className="homeCounter-head">
        <h2>Our Qatar Attestation Stats</h2>
      </div>
      <ul>
        <li>
          <div className="homeCounter-content">
            <CountUp
              className="countNo"
              start={0}
              end={2600}
              suffix="+"
              duration={5}
            />
          </div>
          <div className="homeCounter-content">
            <b>Educational Certificate</b>
          </div>
        </li>
        <li>
          <div className="homeCounter-content">
            <CountUp
              className="countNo"
              start={0}
              end={1258}
              suffix="+"
              duration={5}
            />
          </div>
          <div className="homeCounter-content">
            <b>Marriage Certificates</b>
          </div>
        </li>
        <li>
          <div className="homeCounter-content">
            {" "}
            <CountUp
              className="countNo"
              start={0}
              end={2180}
              suffix="+"
              duration={5}
            />
          </div>
          <div className="homeCounter-content">
            <b>Birth Certificate</b>
          </div>
        </li>
        <li>
          <div className="homeCounter-content">
            {" "}
            <CountUp
              className="countNo"
              start={0}
              end={315}
              suffix="+"
              duration={5}
            />
          </div>
          <div className="homeCounter-content">
            <b>Commercial Documents</b>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeCounter;
