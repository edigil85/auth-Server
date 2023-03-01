const { response } = require('express');

const crearUsuario = (req, res = response) =>{
    const{ email, name, password }= req.body;
    return res.status(200).json({
        ok: true,
        msg: 'Crar usuario'
    });
}

const loguearUsuario = (req, res = response) =>{
    const{ email, password }= req.body;
    return res.status(200).json({
        ok: true,
        msg: 'Login de usuario'
    });
}

const renovarSeccion = (req, res = response) =>{
    const{ token }= req.body;
    console.log( token)
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