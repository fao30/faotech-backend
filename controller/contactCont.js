const { Contact } = require("../models");
const validator = require("validator");
const { v4: uuid } = require("uuid");
const contactService = require("../service/contactService");
const sendEmail = require("../config/nodemailerConfig");

const createContact = async (req, res) => {
  const { name, companyName, email, budget, projectDetail } = req.body;

  const errors = [];
  try {
    if (!name || !companyName || !email || !budget || !projectDetail) {
      errors.push("Fill all the fields");
    }

    if (!validator.isEmail(email)) {
      errors.push("Email is not valid");
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      const contact = await Contact.create({
        uuid: uuid(),
        name,
        company_name: companyName,
        email,
        budget,
        project_detail: projectDetail,
      });

      sendEmail(name, companyName, email, projectDetail);
      res.send(contact);
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
  const { name, companyName, email, budget, projectDetail } = req.body;
  console.log("here");
  try {
    const oldData = await contactService.findContactByUuid(uuid);
    oldData.name = name;
    oldData.company_name = companyName;
    oldData.email = email;
    oldData.budget = budget;
    oldData.project_detail = projectDetail;
    console.log(oldData);
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
