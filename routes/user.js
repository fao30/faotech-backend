const router = require("express").Router();
const userCont = require("../controller/userCont");

router.get("/", userCont.getAllUsers);

// get user by uuid
router.get("/:uuid", userCont.getUserByUuid);

router.post("/", userCont.createUser);

router.patch("/:uuid", userCont.updateUser);

router.delete("/:uuid", userCont.deleteUser);

module.exports = router;
