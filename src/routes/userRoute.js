const { Router } = require('express');
const UserController = require('../controllers/UserController.js');

const userController = new UserController();

const router = Router();

router.get('/', (req, res) => userController.get(req, res));
router.post('/', (req, res) => userController.post(req, res));

module.exports = router;