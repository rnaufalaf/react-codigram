const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.post("/register", UserController.registerUser);
userRoute.post("/login", UserController.login);
userRoute.get("/details", UserController.getUser);
userRoute.put("/edit", UserController.editUser);

module.exports = userRoute;
