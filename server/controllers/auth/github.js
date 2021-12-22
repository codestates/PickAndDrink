const axios = require("axios");
require("dotenv").config();
const { user } = require('../../models')
const { mkAccessToken, sendAccessToken } = require('../tokenFunctions')
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

// ##################################################################
/*
  이 문서는 Github를 



*/

module.exports = {
  githubLogin: async (req, res) => {
    // get 요청은 로그인 버튼 클릭이라 간주하고 로그인페이지로 리다이렉트
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}`);
  },
  githubCallBack: async (req, res) => {

    // accessToken 을 받아오는 요청
    let response
    try {
      response = await axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token`,
        headers: { accept: 'application/json', },
        data: {
          client_id: clientID,
          client_secret: clientSecret,
          code: req.body.authorizationCode
        }
      })
    } catch(err) {
      return res.status(40).json({message: "Bad Request"})
    }

    // 액세스 토큰 추출
    const accessToken = response.data.access_token

    // 받아온 액세스 토큰을 가지고 유저 정보를 받아오는 요청
    let userData
    try{ 
      userData = await axios.get('https://api.github.com/user', {
        headers: {
          authorization: `token ${accessToken}`,
       }
    })} catch(err) {
      return res.status(401).json({message: "Invalid Token"})
    }

    try {
      // 구조분해 할당을 통해 유저데이터를 추출
      const { name, id, login, html_url } = userData.data

      // 받아온 유저데이터를 바탕으로 DB에서 찾기
      const find = await user.findOne({
        where: { email: html_url }
      })

      // 응답으로 돌려줄 액세스토큰 미리 선언
      let res_accessToken

      // DB 검색결과의 유무에 따라 분기
      if (!find) { // 찾은 값이 없다 > 생성 + 액세스토큰 만들기
        const created = await user.create({
          username: name,
          email: html_url,
          password: id, // pw null 여부로 oauth구분하는게 좋지 않을까
          nickname: login
        })
        delete created.dataValues.password // PW 삭제 필수
        res_accessToken = mkAccessToken(created.dataValues)
        res.status(201)
      } else { // 찾은 값이 있다 > 그 값으로다가 액세스토큰 만들기
        delete find.dataValues.password
        res_accessToken = mkAccessToken(find.dataValues)
        res.status(200)
      }
      
      // 응답으로 돌려보내기
      sendAccessToken(res, res_accessToken)
    } catch(err) {
      return res.status(500).json({message: "Internel Server Error"})
    }
  }
};

// 깃허브 OAuth 백업
// githubLogin: async (req, res) => {
//   res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientID}`);
// },
// githubCallBack: async (req, res) => {
//   axios({
//     method: 'post',
//     url: `https://github.com/login/oauth/access_token`,
//     headers: {
//       accept: 'application/json',
//     },
//     data: {
//       client_id: clientID,
//       client_secret: clientSecret,
//       code: req.body.authorizationCode
//     }
//   }).then((response) => {
//     accessToken = response.data.access_token;
//     res.status(200).json({ accessToken: accessToken })
//   }).catch(e => {
//     res.status(404)
//   })
// }