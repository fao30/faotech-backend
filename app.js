require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");

const generateAccessToken = require("./service/auth/generateToken");
const { Tokens } = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();

// cors config
const corsConfig = {
  origin: process.env.CORS_ORIGINS,
  optionSuccessStatus: 200,
};

// import sequelize
const { sequelize } = require("./models");

// import imageConfig
const uploadImageConfig = require("./service/uploadImageService");

app.use(cors(corsConfig));

// image upload config middleware
app.use(
  multer({
    storage: uploadImageConfig.fileStorage,
    fileFilter: uploadImageConfig.fileFilter,
  }).single("imgUrl")
);
app.use("/image", express.static(path.join(__dirname, "images")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.listen(PORT, async () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`);
  await sequelize.authenticate();
  console.log(`Server database connected`);
});

// routes
// register routes (routes -> user)
app.use("/register", require("./routes/user"));

// jobApply routes (routes -> jobApply)
app.use("/job-apply", require("./routes/jobApply"));

// meeting routes (routes -> meeting)
app.use("/meeting", require("./routes/meeting"));

// contact routes (routes -> contact)
app.use("/contact", require("./routes/contact"));

// sector routes (routes -> sector)
app.use("/sector", require("./routes/sector"));

// stack routes (routes -> stack)
app.use("/stack", require("./routes/stack"));

// image routes (routes -> image)
app.use("/image", require("./routes/image"));

// token
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
