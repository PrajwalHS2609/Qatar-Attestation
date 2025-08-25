"use client";
import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "./NavBar.css";
import Link from "next/link";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const hideSidebar = () => setSidebarOpen(false);
  const showSidebar = () => setSidebarOpen(true);

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
                activeSection === "/services" ? "active-qatarLink" : ""
              }
              onClick={() => handleSectionClick("/services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className={activeSection === "/aboutus" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("/aboutus")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/why"
              className={activeSection === "/why" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("/why")}
            >
              Contact Us
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

        {/* Mobile WhatsApp button */}
        {/* <li className="respButton">
          <a href="https://api.whatsapp.com/send?phone=919148889444">
            <button>
              <FaWhatsapp className="lpQatarMenu-ico" />
              Message Me
            </button>
          </a>
        </li> */}

        {/* Hamburger icon (mobile only) */}
        <FaBars className="lpQatarMenu-hamIcon" onClick={showSidebar} />
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`lpQatarMenu-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="lpQatarMenu-sidebar-header">
          <h2>Menu</h2>
          <FaXmark className="lpQatarMenu-closeIcon" onClick={hideSidebar} />
        </div>
        <ul className="lpQatarMenu-sidebar-links">
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
                activeSection === "/services" ? "active-qatarLink" : ""
              }
              onClick={() => handleSectionClick("/services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className={activeSection === "/aboutus" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("/aboutus")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/why"
              className={activeSection === "/why" ? "active-qatarLink" : ""}
              onClick={() => handleSectionClick("/why")}
            >
              Contact Us
            </Link>
          </li>
          <li className="respButton">
          <a href="https://api.whatsapp.com/send?phone=919148889444">
            <button>
              <FaWhatsapp className="lpQatarMenu-ico" />
              Message Me
            </button>
          </a>
        </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
