require("dotenv").config();
const { v4: uuid } = require("uuid");
const passport = require("passport");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;
const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const validator = require("validator");
const { User } = require("../models");

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const errors = [];

        if (!validator.isEmail(email)) {
          errors.push("Email not valid");
        }

        if (email === null || password === null) {
          errors.push("Please fill all required fields");
        }

        if (errors.length > 0) {
          return done(errors);
        } else {
          const hashPassword = await bcrypt.hash(password, 10);

          const user = await User.create({
            uuid: uuid(),
            email,
            password: hashPassword,
            role: "user",
          });

          return done(null, user);
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const validate = await bcrypt.compare(password, user.password);

        if (!validate) {
          return done(null, false, { message: "Wrong password" });
        }

        return done(null, user, { message: "Logged in successfully" });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
