"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sectors.init(
    {
      uuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sector_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon_link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Sectors",
    }
  );
  return Sectors;
};
