const { sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define (
    "Recipes_type_of_diet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_recipe: {
        field: "id_recipe",
        type: DataTypes.STRING,
        reference: {
          model:"Recipes",
          key: "id"
        }
      },
      id_diet: {
        field: "id_diet",
        type: DataTypes.STRING,
        reference: {
          model: "Type_of_diet",
          key: "id"
        }

        
      }
    },
    {
      tableName: "recipes_type_of_diet",
      timestamps: false,
    }
  )

  return Model;
};