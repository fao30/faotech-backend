require("dotenv").config();
const bcrypt = require("bcrypt");
const validator = require("validator");
const { User } = require("../models");
const { v4: uuid } = require("uuid");
const userService = require("../service/userService");
const generateAccessToken = require("../service/others/generateToken");
const ROLE = require("../middleware/role");

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
      await User.create({
        uuid: uuid(),
        email,
        password: hashPassword,
        role: ROLE.USER,
      });

      const userPayload = {
        email,
        role: process.env.ROLE_USER_TOKEN,
      };

      const accessToken = generateAccessToken(userPayload);

      res.json({ accessToken });
    }
  } catch (err) {
    console.log(err);
    res.send(err).status(401);
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

const updateUser = async (req, res) => {
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
};

const deleteUser = async (req, res) => {
  try {
    const { uuid } = req.params;

    await User.delete({ where: { uuid } });

    res.send("User deleted successfully");
  } catch (err) {
    res.sendStatus(403);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByUuid,
  updateUser,
  deleteUser,
};
