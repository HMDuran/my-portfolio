import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import AboutDetails from "../data/AboutDetails"; 
import "../styles/About.css";
import placeholderImg from "../assets/img/about-me-placeholder.jpg";
import Button from "../components/Button";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function About() {
  const navigate = useNavigate();
  const { bio } = AboutDetails[0];
  
  return (
    <motion.section
      id="aboutme"
      className="about-me d-flex flex-column align-items-center justify-content-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container text-center text-lg-start">
        <div className="row align-items-center justify-content-center">
          <motion.div
            className="col-lg-6 text-center"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={placeholderImg}
              alt="Hanah Mae"
              className="profile-image img-fluid"
            />
          </motion.div>
          <motion.div
            className="col-lg-6"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2>About <span>Hanah Mae.</span></h2>
            <div>{AboutDetails[0].bio}</div>
            <motion.div
              className="btn-container mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                label="View Portfolio"
                onClick={() => navigate("/portfolio")}
                variant="primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;