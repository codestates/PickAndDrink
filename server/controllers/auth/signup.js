const { user } =require('../../models')
const {mkAccessToken, mkRerfreshToken} = require('../tokenFunctions')
// 토큰 함수를 가져와야 함 변수로
require('dotenv').config()

module.exports = async (req, res) => {
    console.log(req.body);

    res.send('ok'); //raw로 보내야 됨



}