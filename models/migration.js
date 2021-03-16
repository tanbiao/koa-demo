const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    return Migration.init(sequelize, DataTypes);
};

class Migration extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        super.init(
            {
                Id: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                Migration: {
                    type: DataTypes.STRING(255),
                    allowNull: false,
                    field: "migration",
                },
                Batch: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    field: "batch",
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
