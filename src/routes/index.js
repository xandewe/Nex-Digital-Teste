const express = require('express');
const router = express.Router()
const usersRoutes = require('./userRoute.js');
const productsRoutes = require('./productRoute.js');

router.use('/users', usersRoutes)
router.use('/products', productsRoutes)

module.exports = router;