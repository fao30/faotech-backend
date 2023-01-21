const router = require("express").Router();
const {
  createJobApply,
  getAllJobApply,
  getJobApplyByUuid,
  updateJobApply,
  deleteJobApply,
} = require("../controller/jobApplyCont");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllJobApply
);

router.get(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  getJobApplyByUuid
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createJobApply
);

router.put(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  updateJobApply
);

router.delete(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  deleteJobApply
);

// error handling
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = router;
