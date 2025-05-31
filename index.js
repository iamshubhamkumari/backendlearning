const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

const userData = {
    id: 1, title: none,
    id:2, title: none2
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gitData', (req, res) =>{
    res.json({use})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
