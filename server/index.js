const express = require('express')
const app = express();

const PORT = 8080;

app.listen(8080, () => {
  console.log(`Server is listening on port ${PORT}!`)
})

app.get('/', (req, res) => {
  res.send(`Hello World`)
})
