const router = require("express").Router();
const stackCont = require("../controller/stackCont");

router.get("/", stackCont.getAllStacks);

router.get("/:uuid", stackCont.getStackByUuid);

router.post("/", stackCont.createStack);

router.patch("/:uuid", stackCont.updateStack);

router.delete("/:uuid", stackCont.deleteStack);

module.exports = router;
