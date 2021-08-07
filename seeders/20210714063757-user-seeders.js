"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Fachrul Razi",
        profession: "Admin ME",
        role: "admin",
        email: "frazi@gmail.com",
        password: await bcrypt.hash("rahasia123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Chozy",
        profession: "Frontend Dev",
        role: "student",
        email: "chozy@gmail.com",
        password: await bcrypt.hash("rahasia345", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
