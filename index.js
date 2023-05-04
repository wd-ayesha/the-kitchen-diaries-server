const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const chefs = require('./data/chefs.json')


app.get('/', (req, res) => {
  res.send('hello server is running!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  const item = chefs?.bangladeshi_chefs?.find(detail => detail.id == id);
  res.send({item});
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})