const { v4: uuid } = require("uuid");
const { Sectors } = require("../models");
const sectorService = require("../service/sectorService");

const getAllSectors = async (req, res) => {
  const sectors = await sectorService.geAllSectorsService();

  res.send(sectors);
};

const getSectorByUuid = async (req, res) => {
  try {
    const { uuid } = req.params;

    const sector = await sectorService.getServiceByUuid(uuid);

    res.send(sector);
  } catch (err) {
    res.sendStatus(403);
  }
};

const createSector = async (req, res) => {
  try {
    const { sectorName, iconLink } = req.body;

    const sector = await Sectors.create({
      uuid: uuid(),
      sector_name: sectorName,
      icon_link: iconLink,
    });

    res.send(sector);
  } catch (err) {
    res.sendStatus(403);
  }
};

const updateSector = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { sectorName, iconLink } = req.body;

    const oldSector = await Sectors.findOne({ where: { uuid } });
    oldSector.sector_name = sectorName;
    oldSector.icon_link = iconLink;

    const newSector = await oldSector.save();
    res.send(newSector);
  } catch (err) {
    res.sendStatus(403);
  }
};

const deleteSector = async (req, res) => {
  try {
    const { uuid } = req.params;

    await Sectors.delete({ where: { uuid } });

    res.send("Sector deleted successfully");
  } catch (err) {
    res.sendStatus(403);
  }
};

module.exports = {
  getAllSectors,
  getSectorByUuid,
  createSector,
  updateSector,
  deleteSector,
};
