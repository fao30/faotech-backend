require("dotenv").config();
const bcrypt = require("bcrypt");
const validator = require("validator");
const { User } = require("../models");
const { v4: uuid } = require("uuid");
const userService = require("../service/userService");
const generateAccessToken = require("../service/others/generateToken");
const ROLE = require("../middleware/role");

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsersService();
      res.send(users);
    } catch (err) {
      next(err);
    }
  }

  static async getUserByUuid(req, res) {
    try {
      const { uuid } = req.params;
      const respond = await userService.findUserByUuid(uuid);
      res.send(respond);
    } catch (err) {
      console.log(err);
      res.send(err).status(500);
    }
  }

  static async updateUser(req, res) {
    try {
      const { uuid } = req.params;
      const { email } = req.body;

      const oldUser = await User.findOne({ where: { uuid } });
      oldUser.email = email;
      const newUser = await User.save();

      res.send(newUser);
    } catch (err) {
      res.sendStatus(403);
    }
  }

  static async deleteUser(req, res) {
    try {
      const { uuid } = req.params;

      await User.delete({ where: { uuid } });

      res.send("User deleted successfully");
    } catch (err) {
      res.sendStatus(403);
    }
  }
}

module.exports = UserController;
