const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/libros");

let libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        match: /^.{3,}$/
    },
    editorial: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        min: 0
    }
});

let Libro = new mongoose.model("libros", libroSchema);

// let libro1 = new Libro({
//     titulo: "El capitán Alatriste",
//     editorial: "Alfaguara",
//     precio: 15
// });

// let libro2 = new Libro({
//     titulo: "El juego de Ender",
//     editorial: "Ediciones B",
//     precio: 8.95
// });

// libro1.save().then(res => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// });

// libro2.save().then(res => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// });

// Libro.find(
//     {
//         precio: { $gte: 10, $lte: 20 }
//     })
//     .then(res => { console.log(res) })
//     .catch(e => console.log(e));

// Libro.findById("5f998353e5e59d2ea84ec8a5")
//     .then(res => { console.log(res) })
//     .catch(e => console.log(e));

// Libro.findByIdAndRemove("5f998353e5e59d2ea84ec8a5")
//      .then(res => { console.log(res) })
//      .catch(e => console.log(e));

Libro.findByIdAndUpdate("5f998353e5e59d2ea84ec8a6", { $set: { precio: 25 } })
    .then(res => { console.log(res) })
    .catch(e => console.log(e));