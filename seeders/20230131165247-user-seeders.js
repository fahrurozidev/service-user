"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        profession: "Admin Micro",
        role: "admin",
        email: "johndoe@mail.com",
        password: await bcrypt.hash("11111111", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Yoen",
        profession: "Front Dev Micro",
        role: "student",
        email: "yoen@mail.com",
        password: await bcrypt.hash("11111111", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
