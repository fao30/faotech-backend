const router = require("express").Router();
const { getAllStacks } = require("../controller/stackCont");

router.get("/", getAllStacks);

module.exports = router;
