const router = require("express").Router();
const { Images } = require("../models");
const { v4: uuid } = require("uuid");
const imageCont = require("../controller/imageCont");

router.get("/", imageCont.getAllImages);

router.get("/:imgUrl", imageCont.getImageByUrl);

router.post("/", imageCont.createImage);

module.exports = router;
