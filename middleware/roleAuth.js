require("dotenv").config();
const { User } = require("../models");

const adminAuth = (permission) => {
  return async (req, res, next) => {
    try {
      const { email } = req.headers;

      const user = await User.findOne({ where: { email } });

      if (user.role !== permission) {
        return res.json("You not allowed to access").status(401);
      }
      next();
    } catch (err) {
      console.log(err);
      res.status(403).json("You are not allowed to access this");
    }
  };
};

module.exports = adminAuth;
