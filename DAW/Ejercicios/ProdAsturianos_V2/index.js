/*
    index.js: Entrada principal de la aplicación, se establece una conexión con la base de datos
    y se incluye el enrutador en el servidor principal con la ruta correspondiente, a continuación,
    se pone el servidor a escuchar peticiones.
*/

"use strict";

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/productos',
    { useNewUrlParser: true });

let app = express();
app.use(express.json());

const productos = require(__dirname + "/routes/productos.js");
app.use('/productos', productos);

app.listen(8080);