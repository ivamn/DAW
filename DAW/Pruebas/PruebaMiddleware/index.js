/*
Aplicación estructurada en carpetas para una API REST completa sobre
contactos, restaurantes y mascotas
*/

// Librerías
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Enrutadores
const mascotas = require(__dirname + '/routes/mascotas');
const restaurantes = require(__dirname + '/routes/restaurantes');
const contactos = require(__dirname + '/routes/contactos');

// Conexión con la BD
mongoose.connect('mongodb://localhost:27017/contactos', { useNewUrlParser: true });

// Servidor Express
let app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log("Petición desde", req.ip);
    next();
});
app.use((req, res, next) => {
    console.log(new Date().toString());
    next();
});

// Middleware body-parser para peticiones POST y PUT
// Enrutadores para cada grupo de rutas
app.use(bodyParser.json());
app.use('/mascotas', mascotas);
app.use('/restaurantes', restaurantes);
app.use('/contactos', contactos);

// Puesta en marcha del servidor
app.listen(8080);