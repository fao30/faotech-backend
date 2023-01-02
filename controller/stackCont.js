const getStacks = require("../service/sectorService");

const getAllStacks = async (req, res) => {
  const stacks = await getStacks();

  res.send(stacks);
};

module.exports = getAllStacks;
