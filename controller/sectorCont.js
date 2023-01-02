const geAllSectorsService = require("../service/sectorService");

const getAllSectors = async (req, res) => {
  const sectors = await geAllSectorsService();

  res.send(sectors);
};

module.exports = getAllSectors;
