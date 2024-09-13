const { sequelize } = require(".");
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Users", 
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: () => uuidv4(),
                primaryKey: true
              },
              firts_name: {
                field: "firts_name",
                type: DataTypes.STRING,
              },
              last_name: {
                field: "last_name",
                type: DataTypes.STRING,
              },
              user_name: {
                field: "user_name",
                type: DataTypes.STRING,
                unique: true,
              },
              email: {
                field: "email",
                type: DataTypes.STRING,
                unique: true,
                validate: {
                  isEmail: true,
                },
              },
              avatar: {
                field: "avatar",
                type: DataTypes.STRING,
              },
              role: {
                type: DataTypes.INTEGER,
                defaultValue: 0, role: {
                  type: DataTypes.INTEGER,
                  defaultValue: 0, // 0 para usuario común, 1 para administrador
                },
              },
              password: {
                field: "password",
                type: DataTypes.STRING,
              }        
        },
        {
          tableName: "users",
          timestamps: false, 
        }
    );

    Model.associate = (db) => {
      Model.hasMany(db.Users_type_of_diet, {
        as: "users_type_of_diet",
        foreignKey: 'id_users_type_of_diet'
      })
    }

    return Model;
  }
;

