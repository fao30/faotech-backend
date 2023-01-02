const { Contact } = require("../models/contact");
const validator = require("validator");
const { v4: uuid } = require("uuid");
const contactService = require("../service/contactService");

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

module.exports = { createContact, getAllContact, getContactByUuid };
