const router = require("express").Router();
const UserController = require("../controller/userCont");
const adminAuth = require("../middleware/roleAuth");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UserController.getAllUsers
);

// get user by uuid
router.get(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  UserController.getUserByUuid
);

router.patch(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  UserController.updateUser
);

router.delete(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  UserController.deleteUser
);

// error handling
// router.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.json({ error: err });
// });

module.exports = router;
