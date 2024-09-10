const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class RecipesTypeOfDiet extends Model {}

  RecipesTypeOfDiet.init({
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Recipes',
        key: 'id',
      },
    },
    typeOfDietId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TypeOfDiet',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'RecipesTypeOfDiet',
  });

  return RecipesTypeOfDiet;
};