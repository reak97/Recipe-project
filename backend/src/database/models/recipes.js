const { sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Recipes",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'Users', // Nombre de la tabla Users para la clave foránea
          key: 'id',
        },
      },
      presentation_photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qualification: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0, // Ajusta según tus necesidades
      },
      preparation_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rations: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "recipes",
      timestamps: false,
    }
  );

  return Model;
};