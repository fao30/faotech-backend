"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Contacts", [
      {
        uuid: uuid(),
        name: "Jane Doe",
        company_name: "Kimia Farma",
        email: "janedoe@gmail.com",
        budget: 10000000,
        project_detail:
          "Laborum consequat qui sit est in occaecat est aliqua laboris enim. Dolor cillum culpa laborum cupidatat aliqua duis minim adipisicing nostrud cupidatat enim exercitation anim. Incididunt non amet commodo nulla excepteur sit velit dolore sit consequat do.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
      {
        uuid: uuid(),
        name: "Johnny  Walker",
        company_name: "Vodka Corp",
        email: "redLabel@gmail.com",
        budget: 100000000,
        project_detail:
          "Laborum consequat qui sit est in occaecat est aliqua laboris enim. Dolor cillum culpa laborum cupidatat aliqua duis minim adipisicing nostrud cupidatat enim exercitation anim. Incididunt non amet commodo nulla excepteur sit velit dolore sit consequat do.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Contacts", null, {});
  },
};
