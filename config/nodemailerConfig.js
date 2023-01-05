require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = (firstName, lastName, phone, email, message) => {
  const output = ` <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${firstName} ${lastName}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
    `;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Testing",
    text: "Nodemailer",
    html: output,
  };

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send("Email has been sent");
  });
};

module.exports = sendEmail;
