const { JobApply } = require("../models/jobapply");
const findAllJobApply = require("../service/jobApplyService");
const validator = require("validator");
const { v4: uuid } = require("uuid");

const createJobApply = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    positionApply,
    availableStartDate,
    linkResume,
  } = req.body;

  const errors = [];

  try {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !positionApply ||
      !availableStartDate ||
      !linkResume
    ) {
      errors.push("Fill all the fields");
    }

    if (!validator.isEmail(email)) {
      errors.push("Email is not valid");
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      const jobApply = await JobApply.create({
        uuid: uuid(),
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        position_apply: positionApply,
        available_start_date: availableStartDate,
        link_resume: linkResume,
      });

      res.send(jobApply);
    }
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

const getAllJobApply = async (req, res) => {
  const jobApplies = await findAllJobApply();

  res.send(jobApplies);
};

module.exports = { createJobApply, getAllJobApply };
