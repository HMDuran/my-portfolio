const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./mailer"); 

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const emailText = `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Message: ${message}
  `;

  const result = await sendMail(process.env.EMAIL_USER, "Someone What To Get In Touch With You", emailText);
  
  if (result.success) {
    res.status(200).json({ message: "Email sent successfully!" });
  } else {
    res.status(500).json({ message: "Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
