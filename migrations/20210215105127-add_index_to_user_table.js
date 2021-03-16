"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // eslint-disable-line
        await queryInterface.addIndex("user", ["name"]);
    },

    down: async (queryInterface, Sequelize) => {
        // eslint-disable-line
        await queryInterface.removeIndex("user", "user_name");
    },
};
