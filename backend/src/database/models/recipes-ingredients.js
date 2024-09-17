module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Recipes_Ingredients",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        id_recipe: {
          type: DataTypes.UUID,
          references: {
            model: 'Recipes',
            key: 'id',
          },
        },
        id_ingredient: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Ingredients',
            key: 'id',
          },
        },
      },
      {
        tableName: "recipes_ingredients",
        timestamps: false,
      }
    );
  
    Model.associate = (db) => {
      Model.belongsTo(db.Recipes, { foreignKey: 'id_recipe' });
      Model.belongsTo(db.Ingredients, { foreignKey: 'id_ingredient' });
    };
  
    return Model;
  };