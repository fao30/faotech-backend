"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        uuid: uuid(),
        email: "natadecoco@gmail.com",
        password: uuid(),
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
      {
        uuid: uuid(),
        email: "caonima1223@gmail.com",
        password: uuid(),
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
      {
        uuid: uuid(),
        email: "russkicelovek@yandex.ru",
        password: uuid(),
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
