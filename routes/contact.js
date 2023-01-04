const router = require("express").Router();
const {
  createContact,
  getAllContact,
  getContactByUuid,
  updateContact,
} = require("../controller/contactCont");
const authenticateToken = require("../config/jwtAuth");

// get all contacts info
router.get("/", getAllContact);

// get contact by uuid
router.get("/:uuid", getContactByUuid);

// create a new contact
router.post("/", authenticateToken, createContact);

// update contact
router.patch("/:uuid", updateContact);

module.exports = router;
