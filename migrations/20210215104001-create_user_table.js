"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("user", {
            UserId: {
                autoIncrement: true,
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                field: "user_id",
            },
            Name: {
                type: Sequelize.DataTypes.STRING(50),
                allowNull: false,
                defaultValue: "",
                comment: "用户名",
                field: "name",
            },
            Age: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                comment: "年龄",
                field: "age",
            },
            Status: {
                type: Sequelize.DataTypes.TINYINT(1),
                allowNull: false,
                defaultValue: 1,
                field: "status",
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        // eslint-disable-line
        await queryInterface.dropTable("user");
    },
};
