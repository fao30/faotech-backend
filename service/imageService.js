const { Images } = require("../models");
const { v4: uuid } = require("uuid");

const findAllImagesService = () => {
  return Images.findAll();
};

const findImageByUrlService = (imgUrl) => {
  return Images.findOne({ where: { imgUrl } });
};

const createImageService = (imagePath) => {
  return Images.create({
    uuid: uuid(),
    imgUrl: imagePath,
  });
};

module.exports = {
  findAllImagesService,
  findImageByUrlService,
  createImageService,
};
