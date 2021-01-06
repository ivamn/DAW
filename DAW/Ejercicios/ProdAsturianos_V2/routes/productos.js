/*
    Enrutador para los servicios de productos, exporta el enrutador para usarlo con el archivo principal.
*/

const express = require("express");

const Producto = require(__dirname + "/../models/producto.js");
const Comentario = require(__dirname + "/../models/comentario.js");

const router = express.Router();

router.get("/", (req, res) => {
    Producto.find().then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(500)
            .send({ ok: false, error: "No se encontraron productos" });
    });
});

router.get("/:id", (req, res) => {
    Producto.findById(req.params.id).then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400)
            .send({ ok: false, error: "Producto no encontrado" });
    });
});

router.post("/", (req, res) => {
    let nuevoProducto = new Producto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
    });

    nuevoProducto.save().then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400)
            .send({ ok: false, error: "Error insertando el producto" });
    });
});

router.put("/:id", (req, res) => {
    Producto.findByIdAndUpdate(req.params.id, {
        $set: {
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen
        }
    }, { new: true }).then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400)
            .send({ ok: false, error: "Error modificando el producto" });
    });
});

router.post("/comentarios/:idProducto", (req, res) => {
    let nuevoComentario = new Comentario({
        nombredelusuario: req.body.nombredelusuario,
        comentario: req.body.comentario
    });

    nuevoComentario.save().then(comentario => {
        Producto.findByIdAndUpdate(req.params.idProducto, {
            $push: {
                comentarios: comentario
            }
        }, { new: true }).then(resultado => {
            res.status(200)
                .send({ ok: true, resultado: resultado });
        }).catch(error => {
            res.status(400)
                .send({ ok: false, error: "Error modificando los comentarios del producto" });
        });
    }).catch(error => {
        res.status(400)
            .send({ ok: false, error: "Error modificando los comentarios del producto" });
    });
});

router.delete("/:id", (req, res) => {
    Producto.findByIdAndRemove(req.params.id).then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400)
            .send({ ok: false, error: "Error eliminando el producto" });
    });
});

router.delete("/comentarios/:idProducto/:idComentario", (req, res) => {
    Producto.findByIdAndUpdate(req.params.idProducto, {
        $pull: {
            comentarios: req.params.idComentario
        }
    }, { new: true }).then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400)
            .send({ ok: false, error: "Error eliminado el comentario del producto" });
    });
});

module.exports = router;