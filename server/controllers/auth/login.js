const { user } =require('../../models')
// 토큰 함수를 가져와야 함 변수로
require('dotenv').config()

module.exports = async (req, res) => {
    console.log(req.body);

    const userInfo = await user.findOne({
        where : {email: req.body.email, password: req.body.password}
      })

    if(!userInfo){
        res.status(401).send({ "message": "Worng ID or Password" })
    }
    
    else{
        console.log(userInfo.dataValues);
        
        res.send('ok');
    }
    
    



}