"use client";
import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "./NavBar.css";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
          <li className="services">
            <Link
              href="/services"
              className={
                activeSection === "/services" ? "active-qatarLink" : ""
              }
              onClick={() => handleSectionClick("/services")}
            >
              Services
            </Link>
            <div className="menuDropDown">
              <ul>
                <li><Link href={"/"}>Educational Certificates</Link></li>
                <li><Link href={"/"}>Marriage Certificates</Link></li>
                <li><Link href={"/"}>Birth Certificates</Link></li>
                <li><Link href={"/"}>HRD Attestation</Link></li>
                <li><Link href={"/"}>Commercial Documents</Link></li>
                <li><Link href={"/"}>Legal Documents</Link></li>
              </ul>
            </div>
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
          {/* MOBILE DROPDOWN SERVICES */}
          <li
            className={`mobile-services ${mobileServicesOpen ? "open" : ""}`}
          >
            <div
              className="mobile-services-header"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <Link
                href="/services"
                className={
                  activeSection === "/services" ? "active-qatarLink" : ""
                }
                onClick={() => handleSectionClick("/services")}
              >
                Services
              </Link>
              <MdKeyboardArrowDown
                className={`respDropdown-serviceIco ${
                  mobileServicesOpen ? "rotate" : ""
                }`}
              />
            </div>

            {mobileServicesOpen && (
              <ul className="mobile-submenu">
                <li><Link href={"/"}>Educational Certificates</Link></li>
                <li><Link href={"/"}>Marriage Certificates</Link></li>
                <li><Link href={"/"}>Birth Certificates</Link></li>
                <li><Link href={"/"}>HRD Attestation</Link></li>
                <li><Link href={"/"}>Commercial Documents</Link></li>
                <li><Link href={"/"}>Legal Documents</Link></li>
              </ul>
            )}
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
