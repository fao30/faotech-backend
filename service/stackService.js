const { Stack } = require("../models");

const getStack = () => {
  return Stack.findAll();
};

module.exports = getStack;
