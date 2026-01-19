import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md custom-navbar fixed-top">

      {/* Logo (always visible) */}
      <div className="logo_part">
        <img src="images/skill-swap-logo.png" alt="Skill Swap" />
      </div>

      {/* Hamburger */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible menu */}
      <div className="collapse navbar-collapse" id="mainNavbar">
        <div className="navigation_part ms-auto">
          <ul className="navbar-nav align-items-lg-center gap-lg-4">
            <li className="nav-item">How It Works</li>
            <li className="nav-item">Features</li>
            <li className="nav-item">Testimonial</li>
            <li className="nav-item login">Login</li>
            <li className="nav-item cta">Get Started</li>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
