const { Sectors } = require("../models");

const geAllSectorsService = () => {
  return Sectors.findAll();
};

const getServiceByUuid = (uuid) => {
  return Sectors.findOne({ where: { uuid } });
};
module.exports = { geAllSectorsService, getServiceByUuid };
