const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return User.init(sequelize, DataTypes);
};

class User extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                user_id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                    defaultValue: "",
                    comment: "用户名",
                },
                age: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    comment: "年龄",
                },
                status: {
                    type: DataTypes.TINYINT,
                    allowNull: false,
                    defaultValue: 1,
                },
                test_status: {
                    type: DataTypes.TINYINT,
                    allowNull: false,
                    defaultValue: 1,
                    field: "TestStatus",
                },
                pwd: {
                    type: DataTypes.STRING(32),
                    allowNull: false,
                    defaultValue: "",
                    comment: "密码",
                },
            },
            {
                sequelize,
                tableName: "user",
                timestamps: false,
                indexes: [
                    {
                        name: "PRIMARY",
                        unique: true,
                        using: "BTREE",
                        fields: [{ name: "user_id" }],
                    },
                    {
                        name: "user_name",
                        unique: true,
                        using: "BTREE",
                        fields: [{ name: "name" }],
                    },
                ],
            }
        );
        return User;
    }
}
