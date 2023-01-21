require("dotenv").config();
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.post("/", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An error occurred");

        next(error);
      }

      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);

        const payload = {
          id: user.uuid,
          email: user.email,
          role: user.role,
        };

        const token = jwt.sign(
          { user: payload },
          process.env.ACCESS_TOKEN_SECRET
        );

        console.log(token);

        return res.json({ token });
      });
    } catch (err) {
      return next(err);
    }
  })(req, res, next);
});

// Handle errors.
router.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = router;
