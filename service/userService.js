const { User } = require("../models");

const getAllUsersService = () => {
  return User.findAll();
};

module.exports = getAllUsersService;
