const express = require("express");
const Libro = require(__dirname + "/../models/autor.js");
const router = express.Router();

router.use((req, res, next) => {
    console.log(`Método: ${req.method}, URL: ${req.baseUrl}`);
    next();
});

router.get("/", (req, res) => {
    Libro.find().then(resultado => {
        res.status(200).send({ ok: true, resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "No se han encontrado libros." });
    });
});

router.post("/", (req, res) => {
    let libro = new Libro({
        titulo: req.body.titulo,
        editorial: req.body.editorial,
        precio: req.body.precio,
        autor: req.body.autor
    });
    libro.save().then(resultado => {
        res.status(200).send({ ok: true, resultado });
    }).catch(error => {
        res.status(500).send({ ok: false, error: "Error al insertar el libro." });
    });
});

router.delete("/:id", (req, res) => {
    Libro.findByIdAndRemove(req.params.id).then(resultado => {
        res.status(200).send({ ok: true, resultado });
    }).catch(error => {
        res.status(500).send({ ok: false, error: "No se ha encontrado un libro con el id proporcionado." });
    });
});

module.exports = router;