import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      toast.success(data.message); 
      e.target.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email."); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
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
              isSubmitting={isSubmitting}
            />
          </motion.div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </motion.section>
  );
}

export default Contact;