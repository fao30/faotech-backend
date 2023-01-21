const router = require("express").Router();
const {
  getAllMeetings,
  getMeetingByUuid,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controller/meetCont");
const passport = require("passport");

// get all users
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllMeetings
);

// get meeting by uuid
router.get(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  getMeetingByUuid
);

// create a user
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createMeeting
);

router.patch(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  updateMeeting
);

router.delete(
  "/uuid",
  passport.authenticate("jwt", { session: false }),
  deleteMeeting
);

// error handling
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = router;
