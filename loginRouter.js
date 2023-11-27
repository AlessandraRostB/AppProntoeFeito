const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

const { login } = require('../controllers/loginController');

router.post('/login', login);

module.exports = router;