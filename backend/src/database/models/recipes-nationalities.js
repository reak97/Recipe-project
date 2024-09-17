module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
      "Recipes_Nationalities",
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
        id_nationality: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Nationalities',
            key: 'id',
          },
        },
      },
      {
        tableName: "recipes_nationalities",
        timestamps: false,
      }
    );
  
    Model.associate = (db) => {
      Model.belongsTo(db.Recipes, { foreignKey: 'id_recipe' });
      Model.belongsTo(db.Nationalities, { foreignKey: 'id_nationality' });
    };
  
    return Model;
  };