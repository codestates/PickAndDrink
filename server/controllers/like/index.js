const {user, item, like_comment} = require('../../models')
const { chkValid } =require('../tokenFunctions')

module.exports = {

    // 특정 유저가 좋아요 누른 전체 상품 정보를 조회(출력)
    findLike: async (req, res) => {

        if(!req.headers.authorization){
            res.status(400).send({  message: "Bad Request"})
        }
        
        else{
        
            const accessTokenData = chkValid(req);
        
            if(accessTokenData===null){
                res.status(401).send({ message: "Invalid token" }); 
              }


            
        //헤더에 authorization 받으면 해당 유저인거 알수 있을듯?
        try {

            const likeItemInfo = [];

            const userlike = await like_comment.findAll({
                where : {user_id: accessTokenData.id, like: true},
                raw: true,
            })
            // console.log(userlike)    // 해당 유저가 좋아요 누른 정보들(like_comment 테이블의)
            
            const likeItemId = userlike.map( el => el.item_id)

            for(let i=0; i < likeItemId.length;i++){
                
                const likeItem = await item.findOne({
                    where: {id: likeItemId[i]},
                    // raw: true,
                })
                likeItemInfo.push(likeItem)
            }
            res.status(200).json({data: likeItemInfo})

        } catch (error) {
            
                res.status(500).send({message: "Internel Server Error"})
            }   
        }
    },

    
    postLike: async (req, res) => {

        if(!req.headers.authorization){
            res.status(400).send({  message: "Bad Request"})
        }
        
        else{
        
            const accessTokenData = chkValid(req);
        
            if(accessTokenData===null){
                res.status(401).send({ message: "Invalid token" }); 
              }

              try {
                // path variable로 item-id의 값을 전달 받음(숫자)
                const itemId = req.params.id
                const likeInfo = await like_comment.findOne({
                    where:{user_id: accessTokenData.id, item_id:itemId},
                    raw: true,
                })
                const itemInfo = await item.findOne({
                    where: {id: itemId},
                    raw: true,
                })

                // 해당 유저가 존재하는지?
                if(likeInfo){
                    if(likeInfo.like===0){
                        await like_comment.update({like: 1}, {
                            where: {user_id: accessTokenData.id, item_id:itemId}
                        })
                        // item 테이블의 ranking count 값 증가시킴
                        await item.update({ranking_count: itemInfo.ranking_count+1}, {
                            where: {id:itemId}
                        })
                        res.status(200).send({message: "push like"})
                    }
                    else{
                        await like_comment.update({like: 0}, {
                            where: {user_id: accessTokenData.id, item_id:itemId}
                        })
                        // item 테이블의 ranking count 값 감소시킴
                        await item.update({ranking_count: itemInfo.ranking_count-1}, {
                            where: {id:itemId}
                        })
                        res.status(200).send({message: "cancel like"})
                    }
                   
                }
               // 해당 유저가 존재하지 않는 경우 -> 새로운 값을 추가(create)
               else{
                   await like_comment.create({
                            like: true, // 기존에 like 안눌렀었다는 뜻이므로
                            user_id: accessTokenData.id,
                            item_id:itemId,
                        })
                        // item 테이블의 ranking count 값 증가시킴
                        await item.update({ranking_count: itemInfo.ranking_count+1}, {
                            where: {id:itemId}
                        })
                        res.status(201).send({message: "add like"})
               }   

              } catch (error) {
                  res.status(500).send({message: "Internel Server Error"})
              }
        }

    }

}