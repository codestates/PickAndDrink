const { user } =require('../../models')
const { chkValid } =require('../tokenFunctions')

module.exports = {

  getMyInfo: async (req, res) => {
    
    if(!req.headers.authorization){
        res.status(400).send({  message: "Bad Request"})
    }
    
    else{
    
        const accessTokenData = chkValid(req);
    
        if(accessTokenData===null){
            res.status(401).send({ message: "Invalid token" }); 
          }
    
        //   console.log(accessTokenData)
          const {email} = accessTokenData;
    
          user.findOne({ where: {email} })
          .then( (data) =>{
            if(!data){
              res.status(400).send({ message: "존재하지 않는 사용자입니다"  });
            }
    
            const {id, username, email, nickname, createdAt, updatedAt} = data.dataValues;
            const payLoad = {id, username, email, nickname, createdAt, updatedAt};
    
            // console.log(data)
            res.status(200).json({"userData": payLoad})
        
        }).catch((err) =>
            // console.log("내부 에러 발생")
            res.status(500).send({ message: "Internel Server Error" })
            )
        }
  }

}