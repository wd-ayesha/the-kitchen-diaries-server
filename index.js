const express = require('express')
const app = express()
const port = 5000
const chefs = require('./data/chefs.json')

app.get('/', (req, res) => {
  res.send('The Kitchen Diaries server!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
  console.log(`The Kitchen Diaries server is running on port ${port}`)
})