require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();

// cors config
const corsConfig = {
  origin: process.env.CORS_ORIGINS,
  optionSuccessStatus: 200,
};

// import sequelize
const { sequelize } = require("./models");

app.use(cors(corsConfig));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.listen(PORT, async () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`);
  await sequelize.authenticate();
  console.log(`Database connected`);
});

// routes
app.use("/register", require("./routes/user"));
app.use("/job-apply", require("./routes/jobApply"));
app.use("/book-meeting", require("./routes/book"));
app.use("/contact", require("./routes/contact"));
