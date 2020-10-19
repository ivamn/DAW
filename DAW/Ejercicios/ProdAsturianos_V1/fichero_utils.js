"use strict";

module.exports = {
    cargarProductos: cargarProductos,
    guardarProductos: guardarProductos
}

const fs = require("fs");

function cargarProductos(fileName) {
    try {
        if (fs.existsSync(fileName)) {
            return JSON.parse(fs.readFileSync(fileName, "utf-8"));
        }
    } catch (e) {
        console.log("Error al leer el archivo: " + e);
    }
    return [];
}

function guardarProductos(fileName, products) {
    if (products && products.lenth > 0) {
        try {
            fs.writeFileSync(fileName, JSON.stringify(products));
        } catch (error) {
            console.log("Error al escribir el archivo: " + error);
        }
    }
}