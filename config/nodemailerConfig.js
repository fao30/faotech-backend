require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = (name, companyName, email, projectDetail) => {
  const output = ` <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${name}</li>
      <li>Company: ${companyName}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Detail Project</h3>
    <p>${projectDetail}</p>
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
