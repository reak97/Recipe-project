const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Categories",
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
            tableName: "categories",
            timestamps: false,
        }
    );

    Model.associate = (db) => {
        Model.belongsToMany(db.Recipes, {
            through: db.Recipes_Categories, // Tabla pivot
            foreignKey: 'id_category',
            as: "recipes"
        });
    };

    return Model;
};