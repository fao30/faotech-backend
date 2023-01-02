const { JobApply } = require("../models");

const findAllJobApply = () => {
  return JobApply.findAll();
};

module.exports = findAllJobApply;
