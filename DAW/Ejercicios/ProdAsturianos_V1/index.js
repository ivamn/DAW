/*
    index.js: Entrada principal de la aplicación, se definen como se responde
    a las peticiones del servidor express y se pone el servidor a la escucha.
*/

"use strict";

const express = require("express");
const fichero_utils = require("./fichero_utils");

const FILE_NAME = "productos.json";

let app = express();
app.use(express.json());

let productos = fichero_utils.cargarProductos(FILE_NAME);

app.get("/productos", (req, res) => {
    if (productos && productos.length > 0) {
        res.status(200).send({ ok: true, resultado: productos });
    } else {
        res.status(500).send({ ok: false, error: "No se encontraron productos" });
    }
});

app.get("/productos/:id", (req, res) => {
    let result = productos.filter(p => {
        return p.id == req.params["id"];
    });

    let p = result[0];

    if (p) {
        res.status(200).send({ ok: true, resultado: p });
    } else {
        res.status(500).send({ ok: false, error: "No se encontraron productos" });
    }
});

app.post("/productos", (req, res) => {
    let result = productos.filter(p => p.id == req.body.id);
    if (result.length > 0 || !req.body.id) {
        res.status(400).send({ ok: false, error: "Código repetido o no está presente" });
    } else {
        let newProduct = {
            id: req.body.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        };
        productos.push(newProduct);
        res.status(200).send({ ok: true, resultado: newProduct });
        fichero_utils.guardarProductos(FILE_NAME, productos);
    }
});

app.put("/productos/:id", (req, res) => {
    let result = productos.filter(p => p.id == req.params["id"]);
    if (result.length > 0) {
        let p = result[0];
        p.nombre = req.body.nombre;
        p.precio = req.body.precio;
        p.descripcion = req.body.descripcion;
        res.status(200).send({ ok: true, resultado: p });
        fichero_utils.guardarProductos(FILE_NAME, productos);
    } else {
        res.status(400).send({ ok: false, error: "Producto no encontado" });
    }
});

app.delete("/productos/:id", (req, res) => {
    let result = productos.filter(p => p.id == req.params["id"]);
    if (result.length > 0) {
        let product = result[0];
        let index = productos.indexOf(product);
        productos.splice(index, 1);
        res.status(200).send({ ok: true, resultado: product })
        fichero_utils.guardarProductos(FILE_NAME, productos);
    } else {
        res.status(400).send({ ok: false, error: "Producto no encontrado" })
    }
});

app.listen(8080);