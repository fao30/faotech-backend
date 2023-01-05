const router = require("express").Router();
const userCont = require("../controller/userCont");
const adminAuth = require("../middleware/roleAuth");

router.get("/", userCont.getAllUsers);

// get user by uuid
router.get("/:uuid", userCont.getUserByUuid);

router.post("/", adminAuth("admin"), userCont.createUser);

router.patch("/:uuid", adminAuth("admin"), userCont.updateUser);

router.delete("/:uuid", adminAuth("admin"), userCont.deleteUser);

module.exports = router;
