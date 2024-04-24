const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const productController = new ProductController();

const router = Router();

router.get('/', (req, res) => productController.get(req, res));
router.post('/', (req, res) => productController.post(req, res));

module.exports = router;