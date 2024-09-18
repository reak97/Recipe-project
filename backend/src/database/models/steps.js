const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define (
    "Steps", 
    {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,  
      },

    id_recipe: {  
      type: DataTypes.UUID,  
      references: {
        model: 'Recipes', 
        key: 'id',
        }, 
      },

    instruction: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    steps_photo: {
      field: "steps_photo",
      type: DataTypes.STRING,
    },
    
  
    }, 
    {
      tableName: "steps",
      timestamps: false,
    }
  )

  Model.associate = (db) => {
    Model.belongsTo (db.Recipes, {
      as: "recipes",
      foreignKey: "id_recipe"
    })
  }

 return Model;
};