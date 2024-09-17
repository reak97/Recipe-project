module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Recipes_Categories",
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
        id_category: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Categories',
            key: 'id',
          },
        },
      },
      {
        tableName: "recipes_categories",
        timestamps: false,
      }
    );
  
    Model.associate = (db) => {
      Model.belongsTo(db.Recipes, { foreignKey: 'id_recipe' });
      Model.belongsTo(db.Categories, { foreignKey: 'id_category' });
    };
  
    return Model;
  };