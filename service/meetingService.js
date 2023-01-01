const { Meeting } = require("../models");

const findAllMeetings = async () => await Meeting.findAll();

const findMeetingByUuid = async (uuid) => await Meeting.findById(uuid);

module.exports = { findAllMeetings, findMeetingByUuid };
