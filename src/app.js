const express = require('express')
const config = require('./config')
const routes = require('./routes')

const app = express()
app.use(express.json())

app.get("/api/check", (req, res) => {
    res.json({success: true}), 200
})

app.use(config.API_BASE, routes)

module.exports = app