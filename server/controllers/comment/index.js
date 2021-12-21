const {like_comment} = require('../../models')
const {chkValid} = require('../tokenFunctions')

module.exports = {
    getUserComment: async (req, res) => {

        if(!req.headers.authorization){
            res.status(400).send({  message: "Bad Request"})
        } else {
            const accessTokenData = chkValid(req);
        
            if(accessTokenData===null){
                res.status(401).send({ message: "Invalid token" }); 
            }

            try {
                const userData = await like_comment.findAll({
                    where: {user_id: accessTokenData.id}
                })
                return res.status(200).json({data: userData})
            } catch(err) {
                console.log(err)
                res.sendStatus(500).json({message: "Internel Server Error"})
            }
        }
    },
    getItemComment: async (req, res) => {
        const params = req.params
        try {
            const comments = await like_comment.findAll({
                where: {item_id: params.id}
            })

            if (comments.length === 0) return res.status(404).json({message: "Item Not Found"})
            else res.status(200).json({data: comments})
        } catch (err) {
            res.status(500).json({message: "Internel Server Error"})
        }
    },
    modifyComment: async (req, res) => {
        // id나 comment가 falsy > 400 || auth가 inValid이면 401
        if (!req.params.id || !req.headers['authorization']) return res.status(400).json({message: "Bad Request"})
        else {
            const accessTokenData = chkValid(req)
            if (!accessTokenData) return res.status(401).json({message: "Invalid Token"})

            try{
                const target = await like_comment.findOne({
                    where: { user_id: accessTokenData.id, item_id: req.params.id }
                })
                // remove값은 문자열 true/false값이므로 if문에 그냥 넣으면 무조건 true가 반환됨
                // JSON.parse를 통해 문자열에서 Boolean값으로 가져오기
                target.comment = JSON.parse(req.body.remove) ? null : req.body.comment
                await target.save()

                res.status(200)
                if (JSON.parse(req.body.remove)) {
                    res.json({data: target, message: "Comment removed"}) // comment: null 로 변경된 데이터를 전송
                } else {
                    res.json({data: target, message: "Comment modified"})
                }
            } catch(err) {
                res.status(500).json({message: "Internel Server Error"})
            }
        }
    },
    postUserComment: async (req, res) => {
        if (!req.params.id || !req.headers['authorization']) return res.status(400).json({message: "Bad Request"})
        else {
            const accessTokenData = chkValid(req)
            if (!accessTokenData) return res.status(401).json({message: "Invalid Token"})

            try {
                const target = await like_comment.findOne({
                    where: { user_id: accessTokenData.id, item_id: req.params.id }
                })

                if (!target) { // 찾는 값이 없어서 새로 생성
                    const result = await like_comment.create({
                        user_id: accessTokenData.id,
                        item_id: req.params.id,
                        like: 0,
                        comment: req.body.comment
                    })
                    return res.status(201).json({
                        data: result,
                        message: "new column created"
                    })
                } else if (!target.comment) {
                    // 찾는 값은 있는데 comment가 null인 경우
                    target.comment = req.body.comment
                    await target.save()
                    res.status(200).json({
                        data: target,
                        message: "comment added"
                    })
                // 찾는 값 있고 comment 가 있음
                } else res.status(409).json({message: "You already added comment on this item"})
            } catch {
                res.status(500).json({message: "Internel Server Error"})
            }
        }

    //     if(!req.headers.authorization){
    //         res.status(400).send({  message: "Bad Request"})
    //     } else {
    //         const accessTokenData = chkValid(req);
        
    //         if(accessTokenData===null){
    //             res.status(401).send({ message: "Invalid token" }); 
    //         }

    //         const params = Number(req.params.id), comment = req.body.comment

    //         await like_comment.findOrCreate({
    //             where: {
    //                 user_id: accessTokenData.id,
    //                 item_id: params,
    //             },
    //             defaults: {
    //                 comment,
    //                 like: 0
    //             }
    //         })
    //         .then(([find, create]) => {
    //             if (!create) {
    //                 if (find.comment) {
    //                     return res.status(409).json({message: "You already added comment on this item"})
    //                 } else {
    //                     like_comment.update({comment}, {
    //                         where: {user_id: accessTokenData.id, item_id: params}
    //                     })
    //                     .then(() => {
    //                         like_comment.findOne({where: {user_id: accessTokenData.id, item_id: params}})
    //                         .then(data => {
    //                             return res.status(200).json({comment: data})
    //                         })
    //                     })  
    //                 }
    //             }
    //             else {
    //                 res.status(201).json({message: find})
    //             }
    //         })
    //         .catch(() => {
    //             res.status(500).json({message: "Internel Server Error"})
    //         })
    //     }
    }
}