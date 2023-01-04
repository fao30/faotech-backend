const router = require("express").Router();
const imageCont = require("../controller/imageCont");

router.get("/", imageCont.getAllImages);

router.get("/:imgUrl", imageCont.getImageByUrl);

router.post("/", imageCont.createImage);

router.delete("/:imgUrl", imageCont.deleteImage);

module.exports = router;
