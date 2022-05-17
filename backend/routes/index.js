const route = require("express").Router();

route.get("/", (req, res) => {
  res.json("Home Page");
});

const userRoutes = require("./UserRoutes");
route.use("/users", userRoutes);

const postRoutes = require("./PostRoutes");
route.use("/posts", postRoutes);

module.exports = route;
