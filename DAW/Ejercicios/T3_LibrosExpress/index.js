const express = require('express');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');

const autores = require(__dirname + "/routes/autores.js");
const libros = require(__dirname + "/routes/libros.js");

mongoose.connect('mongodb://localhost:27017/libros', { useNewUrlParser: true });

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.json());
app.use("/autores", autores);
app.use("/libros", libros);

app.listen(8080);