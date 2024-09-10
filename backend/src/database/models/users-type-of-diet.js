const { sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define (
    "Users_type_of_diet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    
    id_user: {
      field: "id_user",
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    id_diet: {
      field: "id_diet",
      type: DataTypes.STRING,
      references: {
        model: "Type_of_diet",
        key: "id"
      }
    }
    },
    {
      tableName: "user_type_of_diet",
      timestamps: false,
    }
  ) 

  return Model;
};