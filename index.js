const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('c:/Users/pdhru/OneDrive/Desktop/news app/index.html');
})

app.get('/api', (req, res) => {
  res.sendFile('c:/Users/pdhru/OneDrive/Desktop/news app/index.html');
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})