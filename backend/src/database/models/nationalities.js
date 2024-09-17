module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
      "Nationalities",
      {
          id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          country_name: {
              field: "country_name",
              type: DataTypes.STRING,
              allowNull: false,
          },
          country_code: {
              field: "country_code",
              type: DataTypes.STRING,
              allowNull: false,
          },
          flag: {
              field: "flag",
              type: DataTypes.STRING, // URL de la bandera
          },
      },
      { 
          tableName: "nationalities",
          timestamps: false,
      }
  );

  Model.associate = (db) => {
      Model.belongsToMany(db.Recipes, {
          through: db.Recipes_Nationalities, // Tabla pivot
          foreignKey: 'id_nationality',
          as: "recipes"
      });
  };

  return Model;
};