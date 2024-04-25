const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const userMiddleware = require('../middleware/userMiddleware.js')

const productController = new ProductController();

const router = Router();

/**
 * @swagger
 * /api/productss:
 *   post:
 *     summary: Retorna todos os produtos
 *     description: Obtém uma lista de todos os produtos cadastrados.
 *     responses:
 *       200:
 *         {
 *           "docs": [
 *              {
 *                 "id": UUID,
 *                 "name": STR,
 *                 "value": STR,
 *                 "valuePer": STR,
 *                 "createdAt": TIMESTAMP,
 *                 "deletedAt": TIMESTAMP,
 *                 "updatedAt": TIMESTAMP
 *              }
 *           ],
 *           "pages": INT,
 *           "total": INT
 *          }
 */
router.post('/', (req, res) => productController.post(req, res));

router.use(userMiddleware.verifyToken);
router.get('/', (req, res) => productController.get(req, res));

module.exports = router;