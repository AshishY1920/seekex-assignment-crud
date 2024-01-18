const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const cors = require('cors');
require("dotenv").config();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ limit: "200mb", extended: true }))
app.use(cookieParser())
app.use(cors())

require("dotenv").config({
    path: "backend/config/.env"
})

// IMPORTING ROUTES MIDDLEWARE
const user = require('./Routes/UserRoute');

// USING MIDDLEWARE
app.use('/api/v1', user)

module.exports = app;


