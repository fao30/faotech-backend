const { Stack } = require("../models");

const getAllStack = () => {
  return Stack.findAll();
};

const getStackByUuid = (uuid) => {
  return Stack.findOne(uuid);
};

module.exports = { getAllStack, getStackByUuid };
