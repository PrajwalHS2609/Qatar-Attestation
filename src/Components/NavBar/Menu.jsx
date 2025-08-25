"use client"
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "./NavBar.css";
import Link from "next/link";
const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");


  const hideSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    hideSidebar();
  };
  return (
    <>
      {/* DESKTOP MENU */}
      <div className="lpQatarMenu-container">
        <ul className="lpQatarMenu-list">
          <li>
            <Link
              href="/"
              className={activeSection === "/" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
             href="/services"
              className={
                activeSection === "government-approved" ? "active-qatarLink" : ""
              }
              onClick={() => handleSectionClick("government-approved")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
             href="/aboutus"
              className={activeSection === "services" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("/services")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
             href="/why"
              className={activeSection === "why" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("/why")}
            >
              Why Goodway
            </Link>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=919148889444">
              <button>
                <FaWhatsapp className="lpQatarMenu-ico" />
                Message Me
              </button>
            </a>
          </li>
        </ul>
        <div>
          <li className="respButton">
            <a href="https://api.whatsapp.com/send?phone=919148889444">
              <button>
                <FaWhatsapp className="lpQatarMenu-ico" />
                Message Me
              </button>
            </a>
          </li>
        </div>
        {/* Hamburger icon (mobile) */}
        {/* <FontAwesomeIcon
          icon={faBars}
          className="lpQatarMenu-hamIcon"
          onClick={showSidebar}
        /> */}
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`lpQatarMenu-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="lpQatarMenu-sidebar-header">
          <h2>Menu</h2>
          <FaXmark  className="lpQatarMenu-closeIcon"
            onClick={hideSidebar}/>
        </div>
        <ul className="lpQatarMenu-sidebar-links">
          <li>
            <Link
             href="/home"
              className={activeSection === "home" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
             href="/government-approved"
              className={
                activeSection === "government-approved" ? "active-qatarLink" : ""
              }
              onClick={() => handleSectionClick("government-approved")}
            >
              Govt Approved
            </Link>
          </li>
          <li>
            <Link
             href="/services"
              className={activeSection === "services" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
             href="/documents"
              className={activeSection === "documents" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("documents")}
            >
              Documents
            </Link>
          </li>
          <li>
            <Link
             href="/why"
              className={activeSection === "why" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("why")}
            >
              Why Goodway
            </Link>
          </li>
          <li>
            <a href="tel:9876543210">
              <button>
                <FaWhatsapp className="lpQatarMenu-ico" />
                Call Us Now
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
