const router = require("express").Router();
const {
  getAllMeetings,
  getMeetingByUuid,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controller/meetCont");

// get all users
router.get("/", getAllMeetings);

// get meeting by uuid
router.get("/:uuid", getMeetingByUuid);

// create a user
router.post("/", createMeeting);

router.patch("/:uuid", updateMeeting);

router.delete("/uuid", deleteMeeting);

module.exports = router;
