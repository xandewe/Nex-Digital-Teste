const express = require('express');
const router = express.Router()
const usersRoutes = require('./userRoute.js');

router.use('/users', usersRoutes)

module.exports = router;