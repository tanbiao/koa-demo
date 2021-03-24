"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("user", "pwd", {
            type: Sequelize.DataTypes.STRING(32),
            allowNull: false,
            defaultValue: "",
            comment: "密码",
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("user", "pwd");
    },
};
