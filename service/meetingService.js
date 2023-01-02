const { Meeting } = require("../models");

findAllMeetings = () => {
  return Meeting.findAll();
};

findMeetingByUuid = (uuid) => {
  return Meeting.findOne({ where: { uuid } });
};

module.exports = findAllMeetings;
