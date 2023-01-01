"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Meeting.init(
    {
      uuid: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      company_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      job_title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      business_email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Meeting",
    }
  );
  return Meeting;
};
