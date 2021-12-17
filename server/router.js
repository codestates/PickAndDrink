const express = require('express')
const router = express.Router() // 대문자 Router여야 함 조심!
const controllers = require('./controllers')
require('dotenv').config()

// 각 컨트롤러를 받아와야 함


// auth routing
router.post('/auth/login', controllers.login)
router.get('/auth/logout', controllers.logout)
// router.get('/auth/me', controllers.me)
router.post('/auth/signup', controllers.signup)
router.delete('/auth/signout', controllers.signout)

// //comment routing
// router.get('/comment/:user-id', controllers.comment.getUserComment) // getUserComment 라는 함수명으로 가져오는 것으로 임시 작성
// router.get('/comment/:item-id', controllers.comment.getItemComment) // getItemComment 라는 함수명으로 가져오는 것으로 임시 작성

// //item routing
// router.get('/item', controllers.item.sortByRanking) // 기본값? 기본메서드 같은 느낌?
// router.get('/item', controllers.item.findByType)
// router.get('/item', controllers.item.findByStore)
// router.get('/item', controllers.item.findByEvent)

// router.post('/item/:item-id/comment', controllers.item.postComment)  //! API 문서 보완 필요
// router.put('/item/:item-id/comment/:comment-id', controllers.item.putComment) //! API 문서 보완 필요
// router.delete('/item/:item-id/comment/:comment-id', controllers.item.deleteComment)  //! 뭔가 API쪽의 보완 작업이 필요할 것으로 생각됨 

// router.get('/item/:user-id/like', controllers.item.findLike)    //! 해당 메서드는 로직 고민이 필요
// // 특정 사용자가 좋아요 누른 아이템 목록들을 전체 조회??가 필요?
// router.post('/item/:item-id/like', controllers.item.postLike)
// router.delete('/item/:item-id/like', controllers.item.deleteLike)


// // like routing
// !API 문서 보완 필요할듯?


router.get('/', (req, res) => {
    res.status(200).send("Welcome to PickAndDrink API Server!")
})

module.exports= router;