const router = require("express").Router();

const { Sector } = require("../models");

router.get("/", async (req, res) => {
  const sectors = await Sector.findAll();

  res.send(sectors);
});

module.exports = router;
