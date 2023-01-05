require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticateJWT = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    if (err) return res.sendStatus(403);
    req.user = decode.username;
    next();
  });
};

module.exports = authenticateJWT;
