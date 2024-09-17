const { v4: uuidv4 } = require('uuid');

mmodule.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Ingredients",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
            },
            name: {
                field: "name",
                type: DataTypes.STRING,
                allowNull: false, // Obligatorio
            },
        },
        { 
            tableName: "ingredients",
            timestamps: false,
        }
    );

    Model.associate = (db) => {
        Model.belongsToMany(db.Recipes, {
            through: db.Recipes_Ingredients, // Tabla pivot
            foreignKey: 'id_ingredient',
            as: "recipes"
        });
    };

    return Model;
};