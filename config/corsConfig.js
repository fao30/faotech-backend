require("dotenv").config();

const corsConfig = {
  origin: process.env.CORS_ORIGINS,
  optionSuccessStatus: 200,
};

module.exports = corsConfig;
