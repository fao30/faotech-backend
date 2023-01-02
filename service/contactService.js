const { Contact } = require("../models");

const findAllContacts = () => {
  return Contact.findAll();
};

const findContactByUuid = (uuid) => {
  return Contact.findOne({ where: { uuid } });
};

module.exports = { findAllContacts, findContactByUuid };
