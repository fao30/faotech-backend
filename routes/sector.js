const router = require("express").Router();
const sectorCont = require("../controller/sectorCont");

const authenticateJWT = require("../middleware/jwtAuth");

router.get("/", sectorCont.getAllSectors);

router.get("/:uuid", sectorCont.getSectorByUuid);

router.post("/", authenticateJWT, sectorCont.createSector);

router.patch("/:uuid", authenticateJWT, sectorCont.updateSector);

router.delete("/:uuid", authenticateJWT, sectorCont.deleteSector);

module.exports = router;
