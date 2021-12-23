require('dotenv').config()
const { user } =require('../../models')
const {mkAccessToken, sendAccessToken, mkRefreshToken, sendRefreshToken } = require('../tokenFunctions')
const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const axios = require('axios')

module.exports = {
    // req.body로 authorization code가 들어와야 함
    // console.log(req.body)

    googleLogin: async(req, res) => {
        console.log('구글 리디렉션중')
        return res.redirect(
            // 구글 로그인 화면 리디렉션
            'https://accounts.google.com/o/oauth2/v2/auth?client_id=677269279988-lomn8lsp2mn9cpbqt0k50v2cne0gvoob.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000&scope=openid%20email%20profile'
          );
    },
    
    googleCallback: async(req, res) => {

        const getGtoken = await axios({
            method: 'post',
            url: 'https://oauth2.googleapis.com/token',
            headers: {
                accept: 'application/json',
            },
            data: {
                client_id: clientID,
                client_secret: clientSecret,
                code: req.body.authorizationCode,
                redirect_uri: 'http://localhost:3000',
                grant_type: 'authorization_code',
            }
        })
    
        console.log(getGtoken.data)
        const googleUserInfo = await axios({
                method: 'get',
                url: 'https://www.googleapis.com/oauth2/v2/userinfo?access_token='+getGtoken.data.access_token,
                headers: {
                    authorization: `token ${getGtoken.data.access_token}`,
                    accept: 'application/json',
                },
            })
    
            // console.log(googleUserInfo.data)
    
        await user.findOrCreate({
            where: {email: googleUserInfo.data.email },
            defaults: {
                username: googleUserInfo.data.name,
                email: googleUserInfo.data.email,
                password: googleUserInfo.data.id,
                nickname: googleUserInfo.data.name,
            },
        })
        .then(([result, created]) => {
                //find하든지, create하든지 상관없이 가져오면 됨
                const payLoad = result.dataValues;
                delete payLoad.password
                console.log(payLoad)
                
                const aToken = mkAccessToken(payLoad)
                const rToken = mkRefreshToken(payLoad)
        
                console.log(aToken)
                sendRefreshToken(res, rToken)
                res.status(200)
                sendAccessToken(res, aToken)
                // res.headers('autorization', aToken).json({accessToken: aToken, message: "Login Success"})
                // res.status(200).json({accessToken: aToken, message: "Login Success"})
                // 여기서 클라이언트쪽에 어딘가로 던져줘야 함
            
            })
            .catch( (err) => {
                // console.log("에러입니다")
                res.status(500).send({message: 'Internel Server Error'})
            })

    }

}