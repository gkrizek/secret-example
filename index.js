variables = require('./env.js').variables
const express = require('express')
const app = express()

variables((err, data) => {
  if(err){
    console.log(err)
    process.exit(1)
  }else{
    apiToken = process.env.API_TOKEN
    password = process.env.PASSWORD
    domain = process.env.DOMAIN

    app.listen(8080)
  }
})

app.get('/', (req, res) => {
  res.send('<html><h1>Secret Website</h1><br/><h3>API Token: '+apiToken+'</h3><h3>Password: '+password+'</h3><h3>Domain: '+domain+'</h3></html>')
})
