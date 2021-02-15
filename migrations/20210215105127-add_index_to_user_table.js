"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addIndex("user", ["name"]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeIndex("user", "user_name");
    },
};
