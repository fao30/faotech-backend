const router = require("express").Router();
const { Stack } = require("../models");

router.get("/", async (req, res) => {
  const stacks = await Stack.findAll();

  res.send(stacks);
});

module.exports = router;
