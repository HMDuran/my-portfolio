import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";  
import "../styles/Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(""); 
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["aboutme", "portfolio", "contact"];
      let currentSection = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = sectionId;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);  
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = (section) => {
    const sectionId = section.replace(" ", "").toLowerCase();
    setActiveSection(sectionId);

    if (location.pathname === "/portfolio" && (sectionId === "aboutme" || sectionId === "contact")) {
      navigate("/");  // Go to the landing page
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (sectionId === "portfolio") {
      navigate("/portfolio");
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
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