const userRoute = require("express").Router();

const { authentication } = require("../middlewares/auth");
const UserController = require("../controllers/UserController");

userRoute.post("/register", UserController.registerUser);
userRoute.post("/login", UserController.login);
userRoute.get("/details/", authentication, UserController.getUser);
userRoute.get("/", UserController.getUsers);
userRoute.put("/edit/", authentication, UserController.editUser);

module.exports = userRoute;
