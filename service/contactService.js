const { Contact } = require("../models");

const findAllContacts = async () => await Contact.findAll();

module.exports = findAllContacts;
