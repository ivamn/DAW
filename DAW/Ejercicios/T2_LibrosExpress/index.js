const mongoose = require('mongoose');
const express = require("express");
const app = express();

const autores = require(__dirname + "/routes/autores.js");
const libros = require(__dirname + "/routes/libros.js");

mongoose.connect('mongodb://localhost:27017/libros', {useNewUrlParser: true});

app.use(express.json());
app.use("/autores", autores);
app.use("/libros", libros);

app.listen(8080);