const { response } = require('express');

const crearUsuario = (req, res = response) =>{
    return res.status(200).json({
        ok: true,
        msg: 'Crar usuario'
    });
}

const loguearUsuario = (req, res = response) =>{
    return res.status(200).json({
        ok: true,
        msg: 'Login de usuario'
    });
}

const renovarSeccion = (req, res = response) =>{
    return res.status(200).json({
        ok: true,
        msg: 'Nuevo Json token'
    });
}

module.exports={
    crearUsuario,
    loguearUsuario,
    renovarSeccion
}