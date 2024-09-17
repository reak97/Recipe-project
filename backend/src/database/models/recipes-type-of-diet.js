const { sequelize } = require(".")
const { v4: uuidv4 } = require('uuid');


module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define (
    "Recipes_type_of_diet",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      id_recipe: {
        field: "id_recipe",
        type: DataTypes.UUID,
        reference: {
          model:"Recipes",
          key: "id"
        }
      },
      id_diet: {
        field: "id_diet",
        type: DataTypes.INTEGER,
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

  Model.associate = (db) => {
    Model.belongsTo (db.Recipes, {
      as: "recipes",
      foreignKey: "id_recipe"
    })
    Model.belongsTo (db.Type_of_diet, {
      as: "type_of_diet",
      foreingKey: "id_diet"
    })
  }

  return Model;
};