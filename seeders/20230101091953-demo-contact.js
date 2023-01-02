"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Contacts", [
      {
        uuid: uuid(),
        first_name: "Jane",
        last_name: "Doe",
        email: "janedoe@gmail.com",
        phone: "+6287718915333",
        message:
          "Laborum consequat qui sit est in occaecat est aliqua laboris enim. Dolor cillum culpa laborum cupidatat aliqua duis minim adipisicing nostrud cupidatat enim exercitation anim. Incididunt non amet commodo nulla excepteur sit velit dolore sit consequat do.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
      {
        uuid: uuid(),
        first_name: "John",
        last_name: "Doe",
        email: "jhondoe@gmail.com",
        phone: "+123423423432",
        message:
          "Culpa esse officia tempor mollit adipisicing in ex. Nostrud velit culpa pariatur reprehenderit officia consequat occaecat ut pariatur. Sint amet exercitation ullamco dolore et mollit consequat adipisicing ea deserunt proident minim.",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Contacts", null, {});
  },
};
