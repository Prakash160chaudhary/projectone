require('dotenv').config()
const express = require('express')

const app = express()

const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('prakashchy!')
})

app.get('/login', (req, res) => {
  res.send('<h1>login here </h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>youtube </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})