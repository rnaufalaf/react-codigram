const { Post, User } = require("../models");

class PostController {
  static async getPost(req, res) {
    const id = Number(req.params.id);
    const userId = req.userData.id;
    try {
      let post = await Post.findOne({ include: [User], where: { id: id } });
      if (post) {
        res.status(200).json({ post, userId });
      } else {
        res
          .status(200)
          .json({ message: `Post with an id of ${id} was not found` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getPosts(req, res) {
    try {
      let posts = await Post.findAll({
        include: [User],
      });
      if (posts) {
        res.status(200).json(posts);
      } else {
        res.status(200).json({ message: "Posts are empty" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getPostsByUserId(req, res) {
    const userId = req.userData.id;
    try {
      let postsById = await Post.findAll({
        include: [User],
        where: { UserId: userId },
      });
      if (postsById) {
        res.status(200).json(postsById);
      } else {
        res
          .status(200)
          .json({ message: `Posts for user id ${userId} are empty` });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async createPost(req, res) {
    const UserId = req.userData.id;
    const { title, image, content } = req.body;
    try {
      let result = await Post.create({ title, image, content, UserId });
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  static async editPost(req, res) {
    const UserId = req.userData.id;
    const id = Number(req.params.id);
    const { title, image, content } = req.body;
    try {
      let result = await Post.update(
        { title, image, content },
        { where: { id: id, UserId: UserId } }
      );
      result[0] === 1
        ? res.status(200).json({
            message: `Post with an id of ${id} has been edited successfully`,
          })
        : res
            .status(404)
            .json({ message: `Post with an id of ${id} not found` });
    } catch (err) {
      res.status(500).json({ message: "Edit post failed", err });
    }
  }
  static async deletePost(req, res) {
    const id = Number(req.params.id);
    const UserId = req.userData.id;
    try {
      let result = await Post.destroy({ where: { id: id, UserId: UserId } });
      result === 1
        ? res.status(200).json({
            message: `Post with an id of ${id} has been delete successfully`,
          })
        : res
            .status(404)
            .json({ message: `Post with an id of ${id} not found` });
    } catch (err) {
      res.status(500).json({ message: "Delete post failed", err });
    }
  }
}

module.exports = PostController;
