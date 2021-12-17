// 인증함수 모아놓은 파일
// dotenv로 ACCESS_SECRET, REFRESH_SECRET 받아오기
// jsonwebtoken을 불러와 sign 함수 사용
// module.exports로 함수들을 한번에 내보내기

// 로그인 시에는 accessToken, nickname, email, message 를 반환해야 함.
// GET /auth/me 시에는 유저데이터 전체를 반환해야 함.

require('dotenv').config()
const {sign, verify} = require('jsonwebtoken')

module.exports = {

    // 회원가입/로그인 시 최초 액세스 토큰 발급
    mkAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRET, {expiresIn: "15m"})
    },
    // 회원가입/로그인 시 최초 리프레시 토큰 발급
    mkRefreshToken: (data) => {
        return sign(data, process.env.REFRESH_SECRET, {expiresIn: "14d"})
    },
    // 리프레시 토큰을 cookie에 저장해 반환
    sendRefreshToken: (res, refreshToken) => {
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true
        })
    },
    // accessToken을 data로 담아 반환 > res.body.data.accessToken
    sendAccessToken: (res, accessToken) => {
        res.json({data: {accessToken}, message: 'ok'})
    },
    // myPage진입 시 토큰 인증 및 userdata 반환 > 
    getMypage: (res, accessToken, data) => {
        res.json({ data: { accessToken, userInfo: data }, message: "ok" });
        // userdata 전송 및 accessToken 갱신
    },
    // chkValid 함수 > null 반환은 falsy
    chkValid: (req) => {
        const authorization = req.headers['authorization']
        // auth 가 존재하는지 여부 체크: null이면 401 unauthroized
        if (!authorization) return null

        const token = authorization // token은 Bearer ~~~로 작성되었음
        try { 
            return verify(token, process.env.ACCESS_SECRET)
        } catch(err) {
            console.log("액세스 토큰 확인 에러")
            return null 
        }
    },
    // chkRefreshToken 함수 > null 반환은 falsy
    chkRefreshToken: (refreshToken) => {
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET)
        } catch (err) {
            return null
        }
    }

}