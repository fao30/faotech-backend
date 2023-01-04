const router = require("express").Router();
const sectorCont = require("../controller/sectorCont");

router.get("/", sectorCont.getAllSectors);

router.get("/:uuid", sectorCont.getSectorByUuid);

router.post("/", sectorCont.createSector);

router.patch("/:uuid", sectorCont.updateSector);

router.delete("/:uuid", sectorCont.deleteSector);

module.exports = router;
