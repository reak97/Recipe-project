const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Comments",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true,
            },
            id_recipe: {
                field: "id_recipe",
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'Recipes',
                    key: 'id'
                }
            },
            id_user: {
                field: "id_user",
                type: DataTypes.UUID,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            content: {
                field: "content",
                type: DataTypes.TEXT,
                allowNull: false, // Obligatorio
            },
            
            createdAt: {
                field: "created_at",
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        { 
            tableName: "comments",
            timestamps: false,
        }
    );

    Model.associate = (db) => {
        Model.belongsTo(db.Recipes, {
            as: "recipe",
            foreignKey: 'id_recipe'
        });

        Model.belongsTo(db.Users, {
            as: "user",
            foreignKey: 'id_user'
        });
    };

    return Model;
};