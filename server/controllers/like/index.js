const {user, item, like_comment} = require('../../models')
const { chkValid } =require('../tokenFunctions')

module.exports = {

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

            // console.log(req.headers.authorization)
            // const token = req.headers.authorization
            const likeItemInfo = [];

            // const userData = verify(token, process.env.ACCESS_SECRET)
            // console.log(userData);

            const userlike = await like_comment.findAll({
                where : {user_id: accessTokenData.id, like: true},
                raw: true,
            })
            // console.log(userlike)    // 해당 유저가 좋아요 누른 정보들(like_comment 테이블의)
            
            const likeItemId = userlike.map( el => el.item_id)
            // console.log(likeItemId) 

            for(let i=0; i < likeItemId.length;i++){
                
                const likeItem = await item.findOne({
                    where: {id: likeItemId[i]},
                    // raw: true,
                })
                likeItemInfo.push(likeItem)
            }
            // res.json('ok')
            res.status(200).json({data: likeItemInfo})

        } catch (error) {
            
                res.status(500).send({message: "Internel Server Error"})
            }   
        }
    }
}