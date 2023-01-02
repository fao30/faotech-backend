"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stacks.init(
    {
      uuid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stack_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      icon_link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Stacks",
    }
  );
  return Stacks;
};
