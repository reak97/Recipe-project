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
        type: DataTypes.STRING,
        allowNull: false
      }, 
      
      id_user: {
        field: "id_user",
        type: DataTypes.STRING,
        allowNull: false
      },
      presentation_photo: {
        field: "presentation_photo",
        type: DataTypes.STRING,
        allowNull: false
      },
      qualification: {
        field: "qualification",
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
                validate: {
                    min: 0,
                    max: 5
                }
        
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
    Model.belongsToMany(db.Category, {
      through: "Recipe_category", // Tabla pivot para recetas y categorías
      foreignKey: "id_recipe",
      otherKey: "id_category",
      as: "categories",
    });

    // Asociación con nacionalidad
    Model.belongsTo(db.Nationality, {
      foreignKey: "id_nationality",
      as: "nationality",
    });

    // Asociación con ingredientes (tabla pivot receta_ingrediente)
    Model.belongsToMany(db.Ingredient, {
      through: "Recipe_ingredient", // Tabla pivot para recetas e ingredientes
      foreignKey: "id_recipe",
      otherKey: "id_ingredient",
      as: "ingredients",
    });

    // Asociación con comentarios
    Model.hasMany(db.Comment, {
      as: "comments",
      foreignKey: "id_recipe",
    });
  }

  return Model;
};