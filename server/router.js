const express = require('express')
const router = express.Router() // 대문자 Router여야 함 조심!
const controllers = require('./controllers')
require('dotenv').config()

// 각 컨트롤러를 받아와야 함


// auth routing
router.post('/auth/login', controllers.login)
router.get('/auth/logout', controllers.logout)
router.get('/auth/me', controllers.me.getMyInfo)
router.patch('/auth/me', controllers.me.updateUserInfo)
router.post('/auth/signup', controllers.signup)
router.delete('/auth/signout', controllers.signout)

router.get('/auth/oauth', controllers.oauth.githubLogin)
router.get('/auth/github', controllers.oauth.githubCallBack)

// comment routing
router.get('/comment', controllers.comment.getUserComment)
router.get('/comment/:id', controllers.comment.getItemComment)
router.patch('/comment/:id', controllers.comment.modifyComment)
router.post('/comment/:id', controllers.comment.postUserComment)

//item routing
router.get('/item', controllers.item)

// like routing
router.get('/like', controllers.like.findLike)
router.post('/like/:id', controllers.like.postLike)


router.get('/', (req, res) => {
    res.status(200).send("Welcome to PickAndDrink API Server!")
})

module.exports= router;