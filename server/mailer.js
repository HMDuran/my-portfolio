const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

const sendMail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    console.log("Email sent:", info.response);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send email." };
  }
};

module.exports = sendMail;
