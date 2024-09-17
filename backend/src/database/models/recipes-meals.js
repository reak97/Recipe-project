module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Recipes_Meals",
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
        id_meal: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Meals',
            key: 'id',
          },
        },
      },
      {
        tableName: "recipes_meals",
        timestamps: false,
      }
    );
  
    Model.associate = (db) => {
      Model.belongsTo(db.Recipes, { foreignKey: 'id_recipe' });
      Model.belongsTo(db.Meals, { foreignKey: 'id_meal' });
    };
  
    return Model;
  };