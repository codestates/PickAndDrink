const { user } =require('../../models')
const {mkAccessToken, mkRerfreshToken} = require('../tokenFunctions')
// 토큰 함수를 가져와야 함 변수로ㅏㅏㅏㅏㅏ
require('dotenv').config()

module.exports = async (req, res) => {
    // console.log(req.body);

    const {name, password, nickname, email} = req.body
    console.log(name, password, nickname, email)


    // 입력되지 않은 field가 있으면 오류 반환하기
    if (!name || !password || !nickname || !email) return res.status(401).json({message: 'check your input!'})

    res.send('ok'); //raw로 보내야 됨



}