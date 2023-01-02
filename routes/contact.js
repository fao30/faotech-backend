const router = require("express").Router();
const {
  createContact,
  getAllContact,
  getContactByUuid,
} = require("../controller/contactCont");
const { Contact } = require("../models");

// get all contacts info
router.get("/", getAllContact);

// get contact by uuid
router.get("/:uuid", getContactByUuid);

// create a new contact
router.post("/", createContact);

module.exports = router;
