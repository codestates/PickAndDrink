const { user } =require('../../models')
const { chkValid } =require('../tokenFunctions')

module.exports = {

  getMyInfo: async (req, res) => {
    
    if(!req.headers.authorization){
        res.status(400).send({  message: "Bad Request"})
    }
    
    else{
        // console.log(req.headers)
        const accessTokenData = chkValid(req);
    
        if(accessTokenData===null){
            res.status(401).send({ message: "Invalid token" }); 
          }
    
          // console.log(accessTokenData)
          const {email} = accessTokenData;
    
          user.findOne({ where: {email} })
          .then( (data) =>{
            if(!data){
              res.status(400).send({ message: "존재하지 않는 사용자입니다"  });
            }
    
            const {id, username, email, nickname, createdAt, updatedAt} = data.dataValues;
            const payLoad = {id, username, email, nickname, createdAt, updatedAt};
    
            // console.log(data)
            res.status(200).json({userData: payLoad})
        
        }).catch((err) =>
            // console.log("내부 에러 발생")
            res.status(500).send({ message: "Internel Server Error" })
            )
        }
  },

  updateUserInfo: async(req, res) => {
    // 현재 nickname만 정보수정 가능
    // console.log(req.body)
    const {nickname} = req.body

    if(!req.headers.authorization){
      res.status(400).send({  message: "Bad Request"})
    }
    
    else{
      
      const accessTokenData = chkValid(req);
      
      if(accessTokenData===null){
        res.status(401).send({ message: "Invalid token" }); 
      }
      
      try {
        // console.log(accessTokenData)
        // 기존과 동일한 별명인지 확인해야 하는 작업 필요할듯?
        const checkNickname = await user.findOne({
          where: {nickname}
        })

        if(checkNickname){  // 기존에 사용중인 닉네임인 경우 409: Conflict
          res.status(409).send({message: "already used nickname. check your nickname"})
        }
        else{

          const updateUser = await user.update({ nickname },
            {
              where: {email: accessTokenData.email}
            })
          
          const newNicknameInfo = await user.findOne({
            where: {nickname},
            raw: true,
          })
          delete newNicknameInfo.password
            // console.log(newNicknameInfo)
            res.status(200).json({ data: newNicknameInfo, message: "complete" })
            
          }
      } catch (error) {
        res.status(500).send({ message: "Internel Server Error" })
      }
    }

  }

}