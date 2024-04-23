const express = require('express')

const app = express()

app.get("/api/check", (req, res) => {
    res.json({success: true}), 200
})

module.exports = app