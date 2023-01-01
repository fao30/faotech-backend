const { getStacks } = require("../service/sectorService");

const getAllStacks = (req, res) => {
  const stacks = getStacks;

  res.send(stacks);
};

module.exports = getAllStacks;
