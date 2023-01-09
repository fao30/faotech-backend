const router = require("express").Router();
const {
  getAllMeetings,
  getMeetingByUuid,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controller/meetCont");

const authenticateJWT = require("../middleware/jwtAuth");

// get all users
router.get("/", getAllMeetings);

// get meeting by uuid
router.get("/:uuid", getMeetingByUuid);

// create a user
router.post("/", authenticateJWT, createMeeting);

router.patch("/:uuid", authenticateJWT, updateMeeting);

router.delete("/uuid", authenticateJWT, deleteMeeting);

module.exports = router;
