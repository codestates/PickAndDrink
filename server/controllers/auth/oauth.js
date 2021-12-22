const axios = require("axios");
const { user } = require("../../models");
const {
  mkAccessToken,
  sendAccessToken,
  chkValid,
} = require("../tokenFunctions");
require("dotenv").config();
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  githubLogin: async (req, res) => {
    // 그냥 리다이렉트해
    console.log(req.query)
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}`);
    // else {
      // res.redirect('localhost:8443/auth/github')
    // }
  },
  githubCallBack: async (req, res) => {
    axios({
      method: "post",
      url: `https://github.com/login/oauth/access_token`,
      headers: {
        accept: "application/json",
      },
      data: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: req.body.authorizationCode,
      },
    })
      .then((result) =>
        res
          .status(200)
          .cookie("refreshToken", refresh_Token, {
            httpOnly: true,
            samSite: "none",
          })
          .json({ accessToken: result.data.access_token, message: "ok" })
      )
      .catch((err) => res.status(404));
  }
};
