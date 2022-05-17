const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.post("/register", UserController.registerUser);
userRoute.post("/login", UserController.login);
userRoute.get("/details/:id", UserController.getUser);
userRoute.put("/edit/:id", UserController.editUser);

module.exports = userRoute;
