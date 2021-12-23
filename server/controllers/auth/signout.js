const { user } = require("../../models");
const { chkValid } = require("../tokenFunctions");
require("dotenv").config();

module.exports = async (req, res) => {
  const userData = chkValid(req);

  if (!userData)
    return res.status(401).send({ message: "Unauthorized Request" });

  try {
    const email = userData.email;
    user
      .destroy({ where: { email } })

      .then(() => {
        res.clearCookie("refreshToken", {
          secure: true,
          sameSite: "none",
        });
        res.status(200).json({ message: "ok" });
      });
  } catch (err) {
    return res.status(500).json({ message: "Internel Server Error" });
  }
};
