const express= require('express');


//crear servidor de express
const app = express();

//Configuracion de rutas
app.use( '/api/auth', require('./routes/auth'));


app.listen(4000, ()=> {
    console.log(`Servidor corriendo en el puerto ${ 4000 }`);
});