const express = require('express')
const router = express.Router() // 대문자 Router여야 함 조심!
const controllers = require('./controllers')
require('dotenv').config()

// 각 컨트롤러를 받아와야 함


// auth routing
router.post('/auth/login', controllers.login)
router.get('/auth/logout', controllers.logout)
router.get('/auth/me', controllers.me)
router.post('/auth/signup', controllers.signup)
router.delete('/auth/signout', controllers.signout)

// //comment routing
// router.get('/comment/:user-id', controllers.comment.getUserComment) // getUserComment 라는 함수명으로 가져오는 것으로 임시 작성
// router.get('/comment/:item-id', controllers.comment.getItemComment) // getItemComment 라는 함수명으로 가져오는 것으로 임시 작성

// //item routing
router.get('/item', controllers.item) // 기본값? 기본메서드 같은 느낌?
// router.get('/item', controllers.item.sortByRanking) // 기본값? 기본메서드 같은 느낌?
// router.get('/item', controllers.item.findByType)
// router.get('/item', controllers.item.findByStore)
// router.get('/item', controllers.item.findByEvent)

// router.post('/item/:item-id/comment', controllers.item.postComment)  //! API 문서 보완 필요
// router.put('/item/:item-id/comment/:comment-id', controllers.item.putComment) //! API 문서 보완 필요
// router.delete('/item/:item-id/comment/:comment-id', controllers.item.deleteComment)  //! 뭔가 API쪽의 보완 작업이 필요할 것으로 생각됨 

// like routing
// 해당 유저가 좋아요 누른 전체 상품 조회(출력)
router.get('/like', controllers.like.findLike)
// 여기서 id는 item_id를 뜻함
// 해당 상품에 대한 좋아요 버튼 클릭시 좋아요/좋아요 취소 한번에 동작하도록 로직 구현
router.post('/like/:id', controllers.like.postLike)
// delete 구문은 필요없음
// router.delete('/item/:id/like', controllers.like.deleteLike)




router.get('/', (req, res) => {
    res.status(200).send("Welcome to PickAndDrink API Server!")
})

module.exports= router;