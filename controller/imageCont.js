const imageService = require("../service/imageService");

const getAllImages = async (req, res) => {
  const getAllImages = await imageService.findAllImagesService();

  res.send(getAllImages);
};

const getImageByUrl = async (req, res) => {
  const { imgUrl } = req.params;

  try {
    const getAllImages = await imageService.findImageByUrlService(imgUrl);

    res.send(getAllImages);
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

const createImage = async (req, res) => {
  const imagePath = req.file.path;

  try {
    const errors = [];
    console.log(imagePath);

    if (!imagePath) {
      errors.push("There is no image file to upload");
    }

    if (errors.length > 0) {
      res.send(errors);
    } else {
      const image = await imageService.createImageService(imagePath);

      console.log(image);
      res.send(image);
    }
  } catch (err) {
    console.log(err);
    res.send(err).status(500);
  }
};

module.exports = { getAllImages, getImageByUrl, createImage };
