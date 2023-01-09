const router = require("express").Router();
const {
  createJobApply,
  getAllJobApply,
  getJobApplyByUuid,
  updateJobApply,
  deleteJobApply,
} = require("../controller/jobApplyCont");

const authenticateJWT = require("../middleware/jwtAuth");

router.get("/", getAllJobApply);

router.get("/:uuid", getJobApplyByUuid);

router.post("/", authenticateJWT, createJobApply);

router.patch("/:uuid", authenticateJWT, updateJobApply);

router.delete("/:uuid", authenticateJWT, deleteJobApply);

module.exports = router;
