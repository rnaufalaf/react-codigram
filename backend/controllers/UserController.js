const { User } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jsonwebtoken");

class UserController {
  static async registerUser(req, res) {
    const { email, username, password, phone, country, image } = req.body;
    try {
      let result = await User.create({
        email,
        username,
        password,
        phone,
        country,
        image,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ message: "Register user failed", err });
    }
  }
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      let emailFound = await User.findOne({
        where: { email: email },
      });
      if (emailFound) {
        const accessToken = tokenGenerator(emailFound);
        if (decrypt(password, emailFound.password)) {
          res.status(200).json({ accessToken });
        }
      } else {
        res.status(404).json({
          message: `User with an email of ${email} has not been registered`,
        });
      }
    } catch (err) {
      res.status(500).json({ message: "Login failed", err });
    }
  }
  static async getUser(req, res) {
    const id = req.userData.id;
    try {
      let user = await User.findOne({
        where: { id: id },
      });
      user !== null
        ? res.status(200).json(user)
        : res
            .status(404)
            .json({ message: `User with and id of ${id}not found` });
    } catch (err) {
      res.status(500).json({ message: "Get user failed", err });
    }
  }
  static async getUsers(req, res) {
    try {
      let users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async editUser(req, res) {
    const id = req.userData.id;
    const { email, username, password, phone, country, image } = req.body;
    try {
      let result = await User.update(
        { email, username, password, phone, country, image },
        { where: { id: id }, individualHooks: true }
      );
      result[0] === 1
        ? res.status(200).json({
            message: `User with an id of ${id} has been edit successfully`,
          })
        : res
            .status(404)
            .json({ message: `User with an id of ${id} not found` });
    } catch (err) {
      res.status(500).json({ message: "Edit user failed", err });
    }
  }
}

module.exports = UserController;
