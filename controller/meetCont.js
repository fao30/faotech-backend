const validator = require("validator");
const { v4: uuid } = require("uuid");
const meetingRoutes = require("../service/meetingService");
// const { findMeetingByUuid } = require("../service/meetingService");

const createMeeting = async (req, res) => {
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
};

const getAllMeetings = async (req, res) => {
  const meetings = await meetingRoutes.findAllMeetings();

  res.send(meetings);
};

const getMeetingByUuid = async (req, res) => {
  try {
    const { uuid } = req.params;
    const respond = await meetingRoutes.findMeetingByUuid(uuid);
    res.send(respond);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

module.exports = { createMeeting, getAllMeetings, getMeetingByUuid };
