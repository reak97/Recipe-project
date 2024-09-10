const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Users", 
        {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
              },
              first_name: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              last_name: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              user_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
              },
              email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                  isEmail: true,
                },
              },
              avatar: {
                type: DataTypes.STRING,
                allowNull: true,
              },
              role: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0, // Ajusta el valor por defecto según tus necesidades
              },
              password: {
                type: DataTypes.STRING,
                allowNull: false,
              }        
        },
        {
          tableName: "users",
          timestamps: false, 
        }
    );
    return Model;
  }
;

