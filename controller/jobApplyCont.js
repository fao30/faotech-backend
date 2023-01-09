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

const getJobApplyByUuid = async (req, res) => {
  try {
    const { uuid } = req.params;

    const jobApply = await JobApply.findOne({ where: { uuid } });
    res.send(jobApply);
  } catch (err) {
    res.sendStatus(403);
  }
};

const updateJobApply = async (req, res) => {
  try {
    const { uuid } = req.params;
    const {
      firstName,
      lastName,
      email,
      phone,
      positionApply,
      availableStartDate,
      linkResume,
      status,
    } = req.body;

    const oldJobApply = await JobApply.findOne({ where: { uuid } });
    oldJobApply.first_name = firstName;
    oldJobApply.last_name = lastName;
    oldJobApply.email = email;
    oldJobApply.phone = phone;
    oldJobApply.position_apply = positionApply;
    oldJobApply.available_start_date = availableStartDate;
    oldJobApply.link_resume = linkResume;
    oldJobApply.status = status;
    const newJobApply = await JobApply.save();

    res.send(newJobApply);
  } catch (err) {
    res.sendStatus(403);
  }
};

const deleteJobApply = async (req, res) => {
  try {
    const { uuid } = req.params;

    await JobApply.delete({ where: { uuid } });

    res.send("Job Apply deleted successfully");
  } catch (err) {
    res.sendStatus(403);
  }
};
module.exports = {
  createJobApply,
  getAllJobApply,
  getJobApplyByUuid,
  updateJobApply,
  deleteJobApply,
};
