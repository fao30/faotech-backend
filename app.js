require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");

const generateAccessToken = require("./service/others/generateToken");
const { Tokens } = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();

// cors config import
const corsConfig = require("./config/corsConfig");

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
