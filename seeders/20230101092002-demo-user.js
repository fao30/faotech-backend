"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        uuid: uuid(),
        email: "caonima1223@gmail.com",
        password: uuid(),
        role: "user",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
      {
        uuid: uuid(),
        email: "russkicelovek@yandex.ru",
        password: uuid(),
        role: "user",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
      {
        uuid: uuid(),
        email: "ritza.kerz18@gmail.com",
        password: uuid(),
        role: "admin",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
      {
        uuid: uuid(),
        email: "firly@gmail.com",
        password: uuid(),
        role: "admin",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
