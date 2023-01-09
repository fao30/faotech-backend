const router = require("express").Router();
const imageCont = require("../controller/imageCont");

const authenticateJWT = require("../middleware/jwtAuth");

router.get("/", imageCont.getAllImages);

router.get("/:imgUrl", imageCont.getImageByUrl);

router.post("/", authenticateJWT, imageCont.createImage);

router.delete("/:imgUrl", authenticateJWT, imageCont.deleteImage);

module.exports = router;
