const router = require("express").Router();
const validator = require("validator");
const { v4: uuid } = require("uuid");
const { Contact } = require("../models");

// get all contacts info
router.get("/", async (req, res) => {
  const contacts = await Contact.findAll();

  res.send(contacts);
});

// create a new contact
router.post("/", async (req, res) => {
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
});

module.exports = router;
