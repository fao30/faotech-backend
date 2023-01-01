"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("JobApplies", [
      {
        uuid: uuid(),
        first_name: "Max",
        last_name: "Noel",
        email: "max@gmail.com",
        phone: "+7649876453",
        position_apply: "junior BE",
        available_start_date: new Date().toLocaleDateString(),
        link_resume: "hhtp://www.google.com",
        status: false,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("JobApplies", null, {});
  },
};
