require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const generateAccessToken = require("./service/auth/generateToken");
const { Tokens } = require("./models");

const PORT = process.env.PORT || 4000;

const app = express();

const { sequelize } = require("./models");

app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const user = {
    username: process.env.USERNAME_USER_TOKEN,
    password: process.env.PASSWORD_USER_TOKEN,
  };

  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

  await Tokens.create({
    accessToken,
    refreshToken,
  });

  res.json({ accessToken, refreshToken });
});

app.post("/token", async (req, res) => {
  const { token } = req.body;

  try {
    const findToken = await Tokens.findOne({ where: { refreshToken: token } });

    if (token === null) return res.sendStatus(401);
    if (!findToken) return res.sendStatus(403);

    jwt.verify(findToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({
        username: user.username,
        password: user.password,
      });
      res.json({ accessToken });
    });
  } catch (err) {
    console.log(err);
    res.send(err).status(401);
  }
});

app.delete("/logout", async (req, res) => {
  const { token } = req.body;
  try {
    await Tokens.delete({ where: { refreshToken: token } });
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.send(err).status(401);
  }
});

app.listen(PORT, async (req, res) => {
  console.log(`Auth server running on port ${PORT}`);
  await sequelize.authenticate();
  console.log("Auth server database connected");
});
