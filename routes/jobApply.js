const router = require("express").Router();
const {
  createJobApply,
  getAllJobApply,
  getJobApplyByUuid,
  updateJobApply,
  deleteJobApply,
} = require("../controller/jobApplyCont");

router.get("/", getAllJobApply);

router.get("/:uuid", getJobApplyByUuid);

router.post("/", createJobApply);

router.patch("/:uuid", updateJobApply);

router.delete("/:uuid", deleteJobApply);

module.exports = router;
