const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Ingredients",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
            },
            
            name:{
                field: "ingredient",
                type: DataTypes.STRING,
             },
              },
        { 
        tableName: "ingredients",
        timestamps: false,
         });

Model.associate = (db) => {
Model.hasMany(db.Recipes, {
    as: "ingredient",
    foreignKey: 'id_ingredient' });
};
    return Model;
     };