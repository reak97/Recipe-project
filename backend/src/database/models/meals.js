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
            name: {
                field: "name",
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { 
            tableName: "meals",
            timestamps: false,
        }
    );

    Model.associate = (db) => {
        Model.belongsToMany(db.Recipes, {
            through: db.Recipes_Meals, // Tabla pivot
            foreignKey: 'id_meal',
            as: "recipes"
        });
    };

    return Model;
};