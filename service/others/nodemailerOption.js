require("dotenv").config();

const mailOptions = (email, message) => {
  return {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: "Testing",
    text: message,
  };
};

module.exports = mailOptions;
