const mongoose = require("mongoose");

let libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    editorial: {
        type: String
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'autor'
    }
});

let Libro = mongoose.model('libro', libroSchema);

module.exports = Libro;