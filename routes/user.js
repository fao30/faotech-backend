const router = require("express").Router();
const { getAllUsers, createUser } = require("../controller/userCont");

router.get("/", getAllUsers);

router.post("/", createUser);

module.exports = router;
