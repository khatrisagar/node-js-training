const { verifyToken } = require("../utils/helpers/jwt-token.helper");

const authenticate = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const decode = verifyToken(req.headers.authorization);
      req.user = {
        id: decode.id,
      };
      return next();
    } else {
      return res.status(401).json({ message: "Login to Get Access" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized User" });
  }
};

module.exports = { authenticate };
