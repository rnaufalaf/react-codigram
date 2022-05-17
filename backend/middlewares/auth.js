const { tokenVerifier } = require("../helpers/jsonwebtoken");

const authentication = (req, res, next) => {
  const accessToken = req.headers.accesstoken;

  if (accessToken) {
    try {
      const userData = tokenVerifier(accessToken);
      req.userData = userData;
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token!" });
    }
  } else {
    res.status(500).json({ message: "Token not found!" });
  }
};

module.exports = authentication;
