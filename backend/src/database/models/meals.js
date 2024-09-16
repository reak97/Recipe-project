const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Meals",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
            },
            
            name:{
                field: "meal",
                type: DataTypes.STRING,
             },
              },
        { 
        tableName: "meals",
        timestamps: false,
         });

Model.associate = (db) => {
Model.hasMany(db.Recipes, {
    as: "meal",
    foreignKey: 'id_meal' });
};
    return Model;
     };