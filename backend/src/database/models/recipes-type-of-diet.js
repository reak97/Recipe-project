const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TypeOfDiet extends Model {
    static associate(models) {
      // Relación con recetas a través de RecipesTypeOfDiet
      TypeOfDiet.belongsToMany(models.Recipe, { through: models.RecipesTypeOfDiet, foreignKey: 'typeOfDietId' });
    }
  }

  TypeOfDiet.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'TypeOfDiet',
  });

  return TypeOfDiet;
};