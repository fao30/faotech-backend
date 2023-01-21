const router = require("express").Router();
const sectorCont = require("../controller/sectorCont");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  sectorCont.getAllSectors
);

router.get(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  sectorCont.getSectorByUuid
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  sectorCont.createSector
);

router.patch(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  sectorCont.updateSector
);

router.delete(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  sectorCont.deleteSector
);

// error handling
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = router;
