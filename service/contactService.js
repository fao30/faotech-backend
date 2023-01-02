const { Contact } = require("../models");

const findAllContacts = () => Contact.findAll();

module.exports = findAllContacts;
