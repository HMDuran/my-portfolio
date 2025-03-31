import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import placeholderImg from "../assets/img/about-me-placeholder.jpg";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function About() {
  const bio = `
    Hi! I'm Hanah Mae, Qui alias necessitatibus sed culpa dolorum non modi dolor aut nulla veniam qui amet amet. 
    Est perspiciatis eaque sed accusamus dignissimos eum enim sunt est doloremque voluptas qui sequi unde. 
    Quo iusto magnam eum ipsam dolorem aut commodi voluptatem ut tempore eius ut maxime assumenda.

    Et galisum nihil hic voluptas consectetur sed exercitationem laborum qui expedita debitis At labore saepe et aspernatur praesentium vel quam eligendi. 
    Sit architecto repellendus sit dolores labore sit nihil molestiae id aspernatur cumque. 
    Et quasi incidunt qui assumenda asperiores qui officia error est internos asperiores ut obcaecati molestiae..
  `;

  return (
    <motion.section
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
            <p>{bio}</p>
            <motion.div
              className="btn-container mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="#portfolio"
                className="btn btn-primary"
              >
                View Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;