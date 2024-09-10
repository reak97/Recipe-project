const { sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define (
    "Type_of_diet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      
    },
    name: {
      field: "name",
      type: DataTypes.STRING,
    },
  }, {
    tableName: "type_of_diet",
    timestamps: false,
  });

  return Model;
    }