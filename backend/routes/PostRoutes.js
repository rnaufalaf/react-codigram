const postRoute = require("express").Router();
const PostController = require("../controllers/PostController");

postRoute.get("/details/:id", PostController.getPost);
postRoute.get("/", PostController.getPosts);
postRoute.get("/userPosts/:id", PostController.getPostsByUserId);
postRoute.post("/add", PostController.createPost);
postRoute.put("/edit/:id", PostController.editPost);
postRoute.delete("/delete/:id", PostController.deletePost);

module.exports = postRoute;
