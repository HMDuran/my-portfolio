import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../styles/Hero.css";
import placeholderImg from "../assets/img/placeholder.png";
import Button from "./Button";

function Hero() {
  const name = "Hanah Mae,";
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < name.length) {
        const nextChar = name.charAt(index);
        setTypedText((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 250);
    return () => clearInterval(typingInterval);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageZoomVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="hero d-flex align-items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container text-center text-lg-start">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <motion.div
            className="col-lg-6 text-center text-lg-start"
            variants={fadeInVariants}
          >
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInVariants}
            >
              Hello<br />
              I'm <span className="typing-effect">{typedText}</span><br />
              <span className="web-dev">Web Developer</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInVariants}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation.
            </motion.p>
            <motion.div
              className="btn-container mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <Button
                label="Resume"
                onClick={() => window.open(process.env.REACT_APP_CV_URL, "_blank")}
                variant="primary"
              />
              <Button
                label="Portfolio"
                onClick={() => navigate("/portfolio")}
                variant="outline-primary" 
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="image-section col-lg-6 text-center d-none d-md-block"
            variants={imageZoomVariants}
          >
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <motion.img
              src={placeholderImg}
              alt="Hanah Mae"
              className="img-fluid hero-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={imageZoomVariants}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;