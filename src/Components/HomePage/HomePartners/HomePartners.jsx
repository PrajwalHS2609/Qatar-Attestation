import React from "react";
import "./HomePartners.css";
import HomePartnerHead from "./HomePartnerHead";
import HomePartnersCard from "./HomePartnersCard";
const HomePartners = () => {
  return (
    <div className="homePartner-wrapper">
      <HomePartnerHead />
      <HomePartnersCard />
    </div>
  );
};

export default HomePartners;
