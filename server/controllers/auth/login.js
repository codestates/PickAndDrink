const { user } =require('../../models')
// 토큰 함수를 가져와야 함 변수로
const {mkAccessToken, sendAccessToken, mkRefreshToken, sendRefreshToken } = require('../tokenFunctions')

require('dotenv').config()

module.exports = async (req, res) => {
    // console.log(req.body);

    const userInfo = await user.findOne({
        where : {email: req.body.email, password: req.body.password}
      })

    if(!userInfo){
        res.status(401).send({ "message": "Worng ID or Password" })
    }
    
    else{
        try {
             // console.log(userInfo.dataValues);
        const payLoad = userInfo.dataValues;
        delete payLoad.password

        // console.log(payLoad);
        // 페이로드를 토큰에 data로 담아서 돌려야 하니깐
        // acessToken
        const aToken = mkAccessToken(payLoad)
        const rToken = mkRefreshToken(payLoad)

        sendRefreshToken(res, rToken)
        sendAccessToken(res, aToken)

        // res.send(payLoad.nickname+'님 환영합니다');
        } catch (error) {
            res.status(500).send({"message": "Internel Server Error"})
        }
       
    }

}