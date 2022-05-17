const postRoute = require("express").Router();
const PostController = require("../controllers/PostController");

postRoute.get("/details", PostController.getPost);
postRoute.get("/", PostController.getPosts);
postRoute.get("/userPosts", PostController.getPostsByUserId);
postRoute.post("/add", PostController.createPost);
postRoute.put("/edit", PostController.editPost);
postRoute.delete("/delete", PostController.deletePost);

module.exports = postRoute;
