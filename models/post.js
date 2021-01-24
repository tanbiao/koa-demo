const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    post_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "标题"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "内容"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "状态"
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "post_id" },
        ]
      },
      {
        name: "title",
        using: "BTREE",
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
