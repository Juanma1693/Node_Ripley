const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('./db')

const app = express()
app.use(express.json())

console.log("router server");
require('dotenv').config()

const port = process.env.PORT || 5000

app.use(cors())
app.use('/', routes())
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))