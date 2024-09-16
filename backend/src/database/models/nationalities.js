const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Nationalities",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
              },
            
            country_name:{
                field: "country_name",
                type: DataTypes.STRING,
             },

            country_code: {
                field: "country_code",
                type: DataTypes.STRING,
              },

            flag: {
                field: "flag",
                type: DataTypes.STRING, // URL de la bandera
              },
            },
        { 
        tableName: "nationalities",
        timestamps: false,
         });

Model.associate = (db) => {
Model.hasMany(db.Recipes, {
    as: "nationality",
    foreignKey: 'id_nationality' });
};
    return Model;
     };