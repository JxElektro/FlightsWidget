const PORT = 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/flight', (req, res) => {
  const options = {
    url: `${process.env.URL}page-size=6`,
    headers: {
      accept: 'application/json',
      'x-cassandra-token': process.env.TOKEN
    }
  }
  axios.request(options).then((response) => {
    console.log(response.data)
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})