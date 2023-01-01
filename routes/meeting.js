const router = require("express").Router();
const {
  getAllMeetings,
  getMeetingByUuid,
  createMeeting,
} = require("../controller/meetCont");

// get all users
router.get("/", getAllMeetings);

// get user by uuid
router.get("/:uuid", getMeetingByUuid);

// create a user
router.post("/", createMeeting);

module.exports = router;
