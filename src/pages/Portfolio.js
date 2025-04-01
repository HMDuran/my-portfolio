import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";
import Projects from "../data/Projects";
import "../styles/PortfolioSection.css";

function Portfolio() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="portfolio"
      className="portfolio-section d-flex flex-column align-items-center justify-content-center py-5 px-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container text-center">
        <motion.h2
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          My Portfolio
        </motion.h2>

        <div className="row g-4">
          {Projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-4"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <PortfolioCard
                image={project.image}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;