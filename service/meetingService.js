const { Meeting } = require("../models");

const findAllMeetings = () => {
  return Meeting.findAll();
};

const findMeetingByUuid = (uuid) => {
  return Meeting.findAll({ where : { uuid }});
};
module.exports = {
  findAllMeetings,
  findMeetingByUuid,
};
