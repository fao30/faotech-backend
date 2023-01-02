const router = require("express").Router();
const {
  getAllUsers,
  getUserByUuid,
  createUser,
} = require("../controller/userCont");
const contactService = require("../service/userService");

router.get("/", getAllUsers);

router.post("/", createUser);

// get user by uuid
router.get("/:uuid", getUserByUuid);

module.exports = router;
