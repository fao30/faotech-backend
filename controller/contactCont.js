const { Contact } = require("../models");
const validator = require("validator");
const { v4: uuid } = require("uuid");
const contactService = require("../service/contactService");
const transporter = require("../config/nodemailerConfig");
const mailOptions = require("../service/others/nodemailerOption");

const createContact = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const errors = [];
  try {
    if (!firstName || !lastName || !email || !phone || !message) {
      errors.push("Fill all the fields");
    }

    if (!validator.isEmail(email)) {
      errors.push("Email is not valid");
    }

    if (errors.length > 0) {
      res.render(errors);
    } else {
      const contact = await Contact.create({
        uuid: uuid(),
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message,
      });

      // await transporter.sendMail(mailOptions, (err, info) => {
      //   if (err) return res.sendStatus(401);
      //   console.log(`Email sent: ${info.response}`);
      // });

      res.render(contact);
    }
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

const getAllContact = async (req, res) => {
  const contacts = await contactService.findAllContacts();

  res.send(contacts);
};

const getContactByUuid = async (req, res) => {
  const { uuid } = req.params;

  try {
    const contact = await contactService.findContactByUuid(uuid);

    res.send(contact);
  } catch (err) {
    res.send(err).status(500);
  }
};

const updateContact = async (req, res) => {
  const { uuid } = req.params;
  const { first_name, last_name, email, phone, message } = req.body;
  try {
    const oldData = await contactService.findContactByUuid(uuid);
    oldData.first_name = first_name;
    oldData.last_name = last_name;
    oldData.email = email;
    oldData.phone = phone;
    oldData.message = message;
    const newData = await oldData.save();
    res.send(newData);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

const deletedContact = async (req, res) => {
  try {
    const { uuid } = req.params;
    await Contact.delete({ where: { uuid } });

    res.send("Contact deleted successfully");
  } catch (err) {
    res.sendStatus(403);
  }
};

module.exports = {
  createContact,
  getAllContact,
  getContactByUuid,
  updateContact,
  deletedContact,
};
