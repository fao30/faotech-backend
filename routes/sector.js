const router = require("express").Router();
const getAllSectors = require("../controller/sectorCont");

router.get("/", getAllSectors);

module.exports = router;
