const router = require("express").Router();
const { createContact, getAllContact } = require("../controller/contactCont");

// get all contacts info
router.get("/", getAllContact);

// create a new contact
router.post("/", createContact);

module.exports = router;
