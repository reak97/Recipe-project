const { sequelize } = require(".")

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define (
    "Users_type_of_diet",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
    
    id_user: {
      field: "id_user",
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    id_diet: {
      field: "id_diet",
      type: DataTypes.INTEGER,
      references: {
        model: "Type_of_diet",
        key: "id"
      }
    }
    },
    {
      tableName: "user_type_of_diet",
      timestamps: false,
    }
  ) 

  Model.associate = (db) =>{
    Model.belongsTo(db.Users, {
      as: "users",
      foreignKey: "id_user"
    });

  Model.belongsTo(db.Type_of_diet, {
      as: "type_of_diet",
      foreignKey: "id_diet"
    });

  }
  
  return Model;
};