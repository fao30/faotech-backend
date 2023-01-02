const { User } = require("../models");

const getAllUsersService = () => {
  return User.findAll();
};

const findUserByUuid = (uuid) => {
  return User.findAll({ where: { uuid } });
};

module.exports = { getAllUsersService, findUserByUuid };
