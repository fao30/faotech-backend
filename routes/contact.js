const router = require("express").Router();
const {
  createContact,
  getAllContact,
  getContactByUuid,
  updateContact,
  deletedContact,
} = require("../controller/contactCont");

const authenticateJWT = require("../middleware/jwtAuth");

// get all contacts info
router.get("/", getAllContact);

// get contact by uuid
router.get("/:uuid", getContactByUuid);

// create a new contact
router.post("/", authenticateJWT, createContact);

// update contact
router.patch("/:uuid", authenticateJWT, updateContact);

// delete contact
router.delete("/:uuid", authenticateJWT, deletedContact);

module.exports = router;
