const { User } = require("../models");

const getAllUsersService = async () => await User.findAll();

module.exports = getAllUsersService;
