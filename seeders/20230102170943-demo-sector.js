"use strict";
const { v4: uuid } = require("uuid");

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Sectors", [
      {
        uuid: uuid(),
        sector_name: "Mobile Development",
        icon_link: "ph:device-mobile-speaker-bold",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "Blockchain Development",
        icon_link: "icon-park-outline:blockchain",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "QA Automation",
        icon_link: "material-symbols:search-check",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "UI/UX Design",
        icon_link: "majesticons:ux-circle",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "MVP Builder",
        icon_link: "la:network-wired",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "Web Development",
        icon_link: "icon-park-outline:code-computer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "Wireframing",
        icon_link: "openmoji:wireframes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "Smart Contract",
        icon_link: "mdi:file-document-edit-outline",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "Software Architecture",
        icon_link: "carbon:container-software",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "Cloud & DevOps",
        icon_link: "material-symbols:backup",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "IoT",
        icon_link: "fluent:iot-20-regular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: uuid(),
        sector_name: "AI Automation",
        icon_link: "eos-icons:ai-operator",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Sectors", null, {});
  },
};
