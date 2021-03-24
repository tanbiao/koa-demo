const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return Migration.init(sequelize, DataTypes);
};

class Migration extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER.UNSIGNED,
                    allowNull: false,
                    primaryKey: true,
                },
                migration: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },
                batch: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "migrations",
                timestamps: false,
                indexes: [
                    {
                        name: "PRIMARY",
                        unique: true,
                        using: "BTREE",
                        fields: [{ name: "id" }],
                    },
                ],
            }
        );
        return Migration;
    }
}
