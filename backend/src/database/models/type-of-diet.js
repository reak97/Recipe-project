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

  Model.associate = (db) => {
    Model.hasMany (db.Users_type_of_diet, {
      as: "users_type_of_diet",
      foreignKey: "id_users_type_of_diet"
    })
    Model.hasMany (db.Recipe_type_of_diet, {
      as: "recipe_type_of_diet",
      foreignKey: "id_recipe_type_of_diet"
    })
  }

  return Model;
    }