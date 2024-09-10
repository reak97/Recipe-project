const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Step extends Model {
    static associate(models) {
      // Relación con Recetas
      Step.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    }
  }

  Step.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Step',
  });

  return Step;
};