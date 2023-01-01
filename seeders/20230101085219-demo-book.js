"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Books", [
      {
        uuid: uuid(),
        first_name: "John",
        last_name: "Smith",
        company_name: "faoTech",
        job_title: "junior FE",
        business_email: "faoTech@gmail.com",
        phone: "+79046698180",
        status: false,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
