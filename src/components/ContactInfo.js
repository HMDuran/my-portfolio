import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../styles/ContactInfo.css";

function ContactInfo({ phone, email, github, linkedin }) {
  const githubUsername = github.split("https://github.com/")[1];
  const linkedinUsername = linkedin.split("https://www.linkedin.com/in/")[1]?.replace("/", "");

  return (
    <div className="contact-info">
      <h2>Contact Me</h2>
      <p>
        <FontAwesomeIcon icon={faPhone} className="icon" /> {phone}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} className="icon" />{" "}
        <a href={github} target="_blank" rel="noopener noreferrer">
          {githubUsername}
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />{" "}
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {linkedinUsername}
        </a>
      </p>
    </div>
  );
}

export default ContactInfo;
