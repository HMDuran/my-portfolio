import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isMobile ? "mobile-navbar" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Hanah<span>mae.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["About Me", "Portfolio", "Contact"].map((item, index) => {
              const sectionId = item.replace(" ", "").toLowerCase();

              return (
                <li className="nav-item" key={index}>
                  <a
                    className={`nav-link ${activeSection === sectionId ? "active-link" : ""}`}
                    href="#aboutme"
                    onClick={() => setActiveSection(sectionId)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;