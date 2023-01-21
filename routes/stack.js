const router = require("express").Router();
const stackCont = require("../controller/stackCont");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  stackCont.getAllStacks
);

router.get(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  stackCont.getStackByUuid
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  stackCont.createStack
);

router.patch(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  stackCont.updateStack
);

router.delete(
  "/:uuid",
  passport.authenticate("jwt", { session: false }),
  stackCont.deleteStack
);

// error handling
router.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
  });

module.exports = router;
