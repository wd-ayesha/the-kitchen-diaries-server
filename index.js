const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('The Kitchen Diaries server!')
})

app.listen(port, () => {
  console.log(`The Kitchen Diaries server is running on port ${port}`)
})