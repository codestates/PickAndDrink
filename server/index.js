require("dotenv").config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fs = require('fs')
const https = require('https')
const app = express()
const router = require('./router')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors({ 
  origin: "http://localhost:3000",
  credentials: true, 
})/*세부 설정 오류시 수정 필요*/)

//라우터 처리해야하므로 라우터 변수를 어디서 가져와야 함 (라우트 파일 생성해야 함)
// -> 라우트 파일쪽에서 컨트롤러와 연결 필요
// router.js 파일을 만들고 이 파일의 경로는 index.js의 파일 경로와 동일한 위치에 존재

app.use(router)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const HTTPS_PORT = process.env.HTTPS_PORT || 8080;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다. 
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
let server;
if(fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")){

  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);

  server.listen(HTTPS_PORT, () => console.log(`https server runnning on port ${HTTPS_PORT}`));

} else {
  server = app.listen(HTTPS_PORT, () => console.log(`http server runnning on port ${HTTPS_PORT}`))
}

module.exports =server;


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
