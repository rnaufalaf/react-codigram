require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { upload } = require("./middlewares/multer");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
});

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
