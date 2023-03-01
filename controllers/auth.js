const { response } = require('express');
const Usuario = require('../models/Usuario')

const crearUsuario = async(req, res = response) =>{
    const{ email, name, password }= req.body;

    try {
    //verificacion de email
        const usuario = await Usuario.findOne ({ email })
        if (usuario) {
            return res.status(200).json({
                ok: true,
                msg: 'Correo ya registrado'
            });
        }

    //crear usuario con el modelo
        const bdusuario= new Usuario( req.body);

    //encriptar contraseña

    //generar JWT

    //crear usuario en bd
        await bdusuario.save();
    
    //respuesta servicio exitosa
    return res.status(200).json({
        ok: true,
        uid: bdusuario.id,
        name: name
    });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: true,
            msg: 'Hablar con el administrador'
        });
    }


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