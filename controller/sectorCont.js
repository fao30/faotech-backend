const { getSectors } = require("../service/sectorService");

const getAllSectors = (req, res) => {
  const sectors = getSectors;
  res.send(sectors);
};

module.exports = getAllSectors;
