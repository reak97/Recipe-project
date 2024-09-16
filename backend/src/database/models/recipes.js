const { sequelize } = require(".");
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Recipes",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      title: {
        field: "title",
        type: DataTypes.STRING
      }, 
      id_category: {
        field: "id_category",
        type: DataTypes.STRING
      },
      id_meal: {
        field: "id_meal",
        type: DataTypes.STRING
      },
      id_nationality: {
        field : "id_nationality",
        type: DataTypes.STRING
      },
      id_ingredients: { 
        field: "id_ingredients",
        type: DataTypes.STRING,
      },
      id_user: {
        field: "id_user",
        type: DataTypes.STRING,
      },
      presentation_photo: {
        field: "presentation_photo",
        type: DataTypes.STRING,
      },
      qualification: {
        field: "qualification",
        type: DataTypes.FLOAT,
        defaultValue: 0, // Ajusta según tus necesidades
      },
      preparation_time: {
        field: "preparation_time",
        type: DataTypes.FLOAT,
      },
      rations: {
        field: "rations",
        type: DataTypes.INTEGER,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Fecha y hora actual en el momento de creación
      },
    },
    {
      tableName: "recipes",
      timestamps: false,
    }
  );

  Model.associate = (db) => {
    Model.hasMany (db.Recipe_type_of_diet, {
      as: "recipe_type_of_diet",
      foreignKey: "id_recipe"
    })
    Model.hasMany (db.Steps, {
      as: "steps",
      foreignKey: "id_recipe"
    })
  }

  return Model;
};