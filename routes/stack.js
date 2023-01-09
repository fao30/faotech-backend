const router = require("express").Router();
const stackCont = require("../controller/stackCont");

const authenticateJWT = require("../middleware/jwtAuth");

router.get("/", stackCont.getAllStacks);

router.get("/:uuid", stackCont.getStackByUuid);

router.post("/", authenticateJWT, stackCont.createStack);

router.patch("/:uuid", authenticateJWT, stackCont.updateStack);

router.delete("/:uuid", authenticateJWT, stackCont.deleteStack);

module.exports = router;
