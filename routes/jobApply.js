const router = require("express").Router();
const {
  createJobApply,
  getAllJobApply,
} = require("../controller/jobApplyCont");

router.get("/", getAllJobApply);

router.post("/", createJobApply);

module.exports = router;
