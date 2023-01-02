"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Sectors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sector_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      icon_link: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date().toLocaleDateString(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date().toLocaleDateString(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Sectors");
  },
};
