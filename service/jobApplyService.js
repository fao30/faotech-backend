const { JobApply } = require("../models");

const findAllJobApply = async () => await JobApply.findAll();

module.exports = findAllJobApply;
