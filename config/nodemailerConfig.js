require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports.transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER_EMAIL,
    pass: process.env.NODEMAILER_USER_PASSWORD,
  },
});
