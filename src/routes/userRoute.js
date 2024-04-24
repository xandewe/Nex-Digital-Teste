const { Router } = require('express');
const UserController = require('../controllers/UserController.js');

const userController = new UserController();

const router = Router();

router.post('/', (req, res) => userController.post(req, res));
router.post('/login', (req, res) => userController.login(req, res));

module.exports = router;