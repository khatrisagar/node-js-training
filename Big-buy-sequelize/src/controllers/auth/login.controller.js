const { verifyPassword } = require("../../utils/helpers/bcrypt.helper");
const { getUserService } = require("../../services/auth.service");
const { createJWTToken } = require("../../utils/helpers/jwt-token.helper");

const userLogin = async (req, res) => {
  try {
    // console.log(req.body);
    const user = await getUserService(req.body.email);
    const isUserValid = await verifyPassword(req.body.password, user.password);
    if (isUserValid) {
      const token = createJWTToken(user.id);
      const userData = {
        name: user.name,
        surname: user.surname,
        email: user.email,
      };
      res.status(200).json({ token, user: userData });
    } else {
      throw new Error("Invalid Email Or Password");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { userLogin };
