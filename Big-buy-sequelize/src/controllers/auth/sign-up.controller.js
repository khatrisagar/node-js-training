const { signUpService } = require("../../services/auth.service");
const userSignup = async (req, res) => {
  try {
    console.log(req.body);
    const user = await signUpService(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { userSignup };
