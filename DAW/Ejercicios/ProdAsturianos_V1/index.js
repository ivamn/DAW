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


app.listen(8080);