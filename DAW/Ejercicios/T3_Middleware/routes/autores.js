const express = require("express");
const Autor = require(__dirname + "/../models/autor.js");
const router = express.Router();

router.get("/", (req, res) => {
    Autor.find().then(resultado => {
        res.status(200).send({ ok: true, resultado });
    }).catch(error => {
        res.status(400).send({ ok: false, error: "No se han encontrado autores." });
    });
})

router.post("/", (req, res) => {
    let autor = new Autor({
        nombre: req.body.nombre,
        anyoNacimiento: req.body.anyoNacimiento
    });
    autor.save().then(resultado => {
        res.status(200).send({ ok: true, resultado });
    }).catch(error => {
        res.status(500).send({ ok: false, error: "Error al insertar el autor." });
    });
})

router.delete("/:id", (req, res) => {
    Autor.findByIdAndRemove(req.params.id).then(resultado => {
        res.status(200).send({ ok: true, resultado });
    }).catch(error => {
        res.status(500).send({ ok: false, error: "No se ha encontrado un autor con el id proporcionado." });
    });
})

module.exports = router;