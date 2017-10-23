'use strict'

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = 3001

app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// midleware
const setHeaders = require('./server/midleware/setHeaders')
const webParsed = require('./server/midleware/webParsed')

// Routes
const vehiculoRobado = require('./server/routes/vehiculoRobado/')

   
app.use('/', setHeaders, webParsed, vehiculoRobado);


app.listen(PORT)
console.log(`Listening at port ${PORT}`)