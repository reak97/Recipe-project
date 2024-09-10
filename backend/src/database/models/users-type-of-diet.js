const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class UsersTypeOfDiet extends Model {}

  UsersTypeOfDiet.init({
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
    typeOfDietId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TypeOfDiet',
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UsersTypeOfDiet',
  });

  return UsersTypeOfDiet;
};