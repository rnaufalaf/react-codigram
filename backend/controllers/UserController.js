const { User } = require("../models");

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
      res.status(500).json(err);
    }
  }
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      let emailFound = await User.findOne({
        where: { email: email, password: password },
      });
      if (emailFound) {
        res.status(200).json(emailFound);
      } else {
        res.status(200).json({ message: "User has not been registered" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getUser(req, res) {
    const id = Number(req.params.id);
    try {
      let user = await User.findOne({
        where: { id: id },
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(200)
          .json({ message: `User with an id of ${id} was not found` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async editUser(req, res) {
    const id = Number(req.params.id);
    const { email, username, password, phone, country, image } = req.body;
    try {
      let result = await User.update(
        { email, username, password, phone, country, image },
        { where: { id: id } }
      );
      res.status(204).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
