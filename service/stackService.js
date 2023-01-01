const { Stack } = require("../models");

const getSectors = async () => await Stack.findAll();

module.exports = getSectors;
