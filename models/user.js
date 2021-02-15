const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return User.init(sequelize, DataTypes);
};

class User extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                UserId: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    field: "user_id",
                },
                Name: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                    defaultValue: "",
                    comment: "用户名",
                    field: "name",
                },
                Age: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                    comment: "年龄",
                    field: "age",
                },
                Status: {
                    type: DataTypes.TINYINT,
                    allowNull: false,
                    defaultValue: 1,
                    field: "status",
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
