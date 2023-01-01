const router = require("express").Router();
const { Meeting } = require("../models");
const validator = require("validator");

// get all users
router.get("/", async (req, res) => {
  const users = await Book.findAll();

  res.send(users);
});

// get user by uuid
router.get("/:uuid", async (req, res) => {
  const { uuid } = req.params;

  try {
    const user = await Book.findById(uuid);

    res.send(user);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
});

// create a user
router.post("/", async (req, res) => {
  const { firstName, lastName, companyName, jobTitle, businessEmail, phone } =
    req.body;

  const errors = [];
  try {
    if (
      !firstName ||
      !lastName ||
      !companyName ||
      !jobTitle ||
      !businessEmail ||
      !phone
    ) {
      errors.push("Fill all the field");
    }

    if (!validator.isEmail(businessEmail)) {
      errors.push("Email is not valid");
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      const meet = await Meeting.create({
        uuid: uuid(),
        first_name: firstName,
        last_name: lastName,
        company_name: companyName,
        job_title: jobTitle,
        business_email: businessEmail,
        status: false,
      });

      res.send(meet);
    }
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
});

module.exports = router;
