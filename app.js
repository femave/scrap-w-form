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
const setHeaders = require('server/midleware/setHeaders')

// Routes
const firstRoute = require('./server/routes/firstRoute/')

   
app.use('/', setHeaders, firstRoute);


app.listen(PORT)
console.log(`Listening at port ${PORT}`)