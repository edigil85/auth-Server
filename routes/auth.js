const { Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loguearUsuario, renovarSeccion } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
//crear un nuevo usuario
router.post('/new',[
    check('name', 'Nombre obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min: 6}),
    validarCampos
] ,
crearUsuario );

//Login de usuario
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({min: 6}),
    validarCampos
]
 , loguearUsuario);

//revalidar token de usuario
router.get('/renew', validarJWT , renovarSeccion)


module.exports = router;