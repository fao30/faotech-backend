const { Sector } = require("../models");

const getStacks = async () => await Sector.findAll();

module.exports = getStacks;
