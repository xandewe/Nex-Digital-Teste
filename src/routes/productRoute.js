const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const userMiddleware = require('../middleware/userMiddleware.js')

const productController = new ProductController();

const router = Router();

router.post('/', (req, res) => productController.post(req, res));

router.use(userMiddleware.verifyToken);
router.get('/', (req, res) => productController.get(req, res));

module.exports = router;