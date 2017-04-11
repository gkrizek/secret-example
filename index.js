require('./env.js')
const express = require('express')
const app = express()

console.log(process.env.API_TOKEN)
console.log(process.env.PASSWORD)
console.log(process.env.DOMAIN)
