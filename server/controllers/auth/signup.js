const { user } =require('../../models')
const {mkAccessToken, mkRefreshToken, sendAccessToken, sendRefreshToken} = require('../tokenFunctions')

require('dotenv').config()

module.exports = async (req, res) => {

    const {username, password, nickname, email} = req.body

    // console.log(req.body)

    if (!username || !password || !nickname || !email) return res.status(401).json({message: 'check your input!'})

    user.findOrCreate({
        where: { email },
        defaults: { username, password, nickname }
    })
    .then(([result, created]) => {
        if (!created) {
          res.status(409).send('Already Signed Up!')
        } else {
        const userData = result.dataValues
        const refreshToken = mkRefreshToken(userData)
        const accessToken = mkAccessToken(userData)

        sendRefreshToken(res, refreshToken)
        res.status(201)
        sendAccessToken(res, accessToken)
      }})
}