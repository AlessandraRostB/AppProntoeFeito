// Importar o modulo de Router do express
const { Router } = require('express');

const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listUsers,
    storeUser,
    updateUser,
    deleteUser
} = require('../controllers/userController')

router.get('/users', listUsers);
router.post('/user/create', storeUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;