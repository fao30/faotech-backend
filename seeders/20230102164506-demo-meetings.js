"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Meetings", [
      {
        uuid: uuid(),
        first_name: "Rivaldo",
        last_name: "Lawalata",
        company_name: "faoTech",
        job_title: "Junior BE",
        business_email: "nono.qwerty28@gmail.com",
        phone: "+6287718915333",
        status: false,
      },
      {
        uuid: uuid(),
        first_name: "Ryan",
        last_name: "Pratama",
        company_name: "faoTech",
        job_title: "Junior FE",
        business_email: "pratamaRyan@gmail.com",
        phone: "+79046698180",
        status: false,
      },
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Meetings", null, {});
  },
};
