const { Router} = require('express');
const { crearUsuario, loguearUsuario, renovarSeccion } = require('../controllers/auth');

const router = Router();
//crear un nuevo usuario
router.post('/new', crearUsuario );

//Login de usuario
router.post('/', loguearUsuario);

//revalidar token de usuario
router.get('/renew', renovarSeccion)



module.exports = router;