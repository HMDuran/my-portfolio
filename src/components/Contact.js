import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import "../styles/Contact.css";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function Contact() {
  const fields = [
    { type: "text", name: "firstName", placeholder: "First Name", required: true },
    { type: "text", name: "lastName", placeholder: "Last Name", required: true },
    { type: "email", name: "email", placeholder: "Your Email", required: true },
    { type: "textarea", name: "message", placeholder: "Your Message", required: true },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Form data submitted:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    alert("Form submitted successfully!");
  };

  return (
    <motion.section
      id="contactme"
      className="contact-me-section d-flex align-items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <motion.div
            className="col-lg-5 contact-info mb-4 mb-lg-0"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <ContactInfo
              phone="+63 975-895-6760"
              email="hanahmae.duran@gmail.com"
              github="https://github.com/HMDuran"
              linkedin="https://www.linkedin.com/in/hanahmaeduran/"
            />
          </motion.div>
          <motion.div
            className="col-lg-5 contact-form d-flex justify-content-center"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Form
              fields={fields}
              onSubmit={handleSubmit}
              buttonText="Send Message"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;