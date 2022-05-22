"use strict";
const { Model } = require("sequelize");
const { encrypt } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [6, 20] },
      },
      password: { type: DataTypes.STRING, allowNull: false },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10, 12],
        },
      },
      country: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = encrypt(user.password);
          user.image = "300.png";
        },
        beforeUpdate: (user, options) => {
          user.password = encrypt(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
