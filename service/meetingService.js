const { Meeting } = require("../models");

findAllMeetings = () => {
  return Meeting.findAll();
};

findMeetingByUuid = (uuid) => {
  console.log("service");
  return Meeting.findOne({ where: { uuid } });
};

module.exports = findAllMeetings;
