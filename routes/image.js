const router = require("express").Router();
const imageCont = require("../controller/imageCont");
const passport = require("passport");

const authenticateJWT = require("../middleware/jwtAuth");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  imageCont.getAllImages
);

router.get(
  "/:imgUrl",
  passport.authenticate("jwt", { session: false }),
  imageCont.getImageByUrl
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  imageCont.createImage
);

router.delete(
  "/:imgUrl",
  passport.authenticate("jwt", { session: false }),
  imageCont.deleteImage
);

// error handling
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = router;
