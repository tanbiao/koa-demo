const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return Sequelizemetum.init(sequelize, DataTypes);
};

class Sequelizemetum extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                Name: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    primaryKey: true,
                },
            },
            {
                sequelize,
                tableName: "sequelizemeta",
                timestamps: false,
                indexes: [
                    {
                        name: "PRIMARY",
                        unique: true,
                        using: "BTREE",
                        fields: [{ name: "name" }],
                    },
                    {
                        name: "name",
                        unique: true,
                        using: "BTREE",
                        fields: [{ name: "name" }],
                    },
                ],
            }
        );
        return Sequelizemetum;
    }
}
