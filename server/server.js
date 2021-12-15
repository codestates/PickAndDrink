const http = require('http')
const fs = require('fs')
const app = http.createServer(function(request,response){
  console.log('asdf')
  response.writeHead(200)
  response.write('Hellow World')
  response.end()

});
app.listen(3000);
