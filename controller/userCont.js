const bcrypt = require("bcrypt");
const validator = require("validator");
const { User } = require("../models");
const { v4: uuid } = require("uuid");
const userService = require("../service/userService");

const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  const errors = [];
  try {
    const hashPassword = await bcrypt.hash(password, 10);

    if (!email || !password) {
      errors.push("Fill all the fields");
    }

    if (!validator.isEmail(email)) {
      errors.push("Email is not valid");
    }

    if (errors.length > 0) {
      res.render(errors);
    } else {
      const user = await User.create({
        uuid: uuid(),
        email,
        password: hashPassword,
      });

      res.render(user);
    }
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

const getAllUsers = async (req, res, next) => {
  const users = await userService.getAllUsersService();

  res.send(users);
};

const getUserByUuid = async (req, res) => {
  try {
    const { uuid } = req.params;
    const respond = await userService.findUserByUuid(uuid);
    res.send(respond);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

module.exports = { getAllUsers, createUser, getUserByUuid };
