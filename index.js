const express= require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require ('dotenv').config();

//crear servidor de express
const app = express();

//conexion a la base de datos
dbConnection();

//aplicacion de cors
app.use( cors());

//lectura y trasformacion body
app.use( express.json() );

//Configuracion de rutas
app.use( '/api/auth', require('./routes/auth'));

//directorio Publico
app.use( express.static('public'));


app.listen(process.env.PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});