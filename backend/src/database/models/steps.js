const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define (
    "Steps", 
    {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    instruction: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  
    }, 
    {
      tableName: "steps",
      timestamps: false,
    }
  )

 return Model;
};