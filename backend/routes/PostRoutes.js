const postRoute = require("express").Router();

const { authentication } = require("../middlewares/auth");
const PostController = require("../controllers/PostController");

postRoute.get("/details/:id", PostController.getPost);
postRoute.get("/", PostController.getPosts);
postRoute.get("/userPosts/", authentication, PostController.getPostsByUserId);
postRoute.post("/add", authentication, PostController.createPost);
postRoute.put("/edit/:id", authentication, PostController.editPost);
postRoute.delete("/delete/:id", authentication, PostController.deletePost);

module.exports = postRoute;
