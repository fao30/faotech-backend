const { Sectors } = require("../models");

const geAllSectorsService = () => {
  return Sectors.findAll();
};

module.exports = geAllSectorsService;
