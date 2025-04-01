import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import Projects from "../data/Projects";
import PortfolioCard from "./PortfolioCard";
import "../styles/PortfolioSection.css";

function PortfolioSection() {
  const navigate = useNavigate();

  const selectedIds = ["1", "2", "3"]; 
  const filteredProjects = Projects.filter((p) => selectedIds.includes(p.id));

  const uniqueProjects = [...new Set(filteredProjects)]; 
  const displayedProjects = uniqueProjects.slice(0, 3); 

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="portfolio-section d-flex flex-column align-items-center justify-content-center"
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

        <motion.p
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          Explore some of my best work and projects that demonstrate my skills.
        </motion.p>

        <div className="row">
          {displayedProjects.map((project) => (
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

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Button 
            label="See More Projects" 
            variant="outline-primary" 
            onClick={() => navigate("/portfolio")}
            />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PortfolioSection;