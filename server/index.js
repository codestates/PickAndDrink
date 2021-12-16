const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
<<<<<<< HEAD
})
=======
})
>>>>>>> bb3181ccc03348e37748a41c0bc7d5f5ae7ceff4
