const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/contactos',
    { useNewUrlParser: true });

let contactoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^\d{9}$/
    },
    edad: {
        type: Number,
        min: 18,
        max: 120
    }
});

let Contacto = mongoose.model('contactos', contactoSchema);

let contacto1 = new Contacto({
    nombre: "Nacho",
    telefono: "966112233",
    edad: 41
});

let contacto2 = new Contacto({
    nombre: "Pepecebo",
    telefono: "912456789",
    edad: 184984
});

contacto1.save().then(resultado => {
    console.log("Contacto añadido:", resultado);
}).catch(error => {
    console.log("ERROR añadiendo contacto:", error);
});

contacto2.save().then(resultado => {
    console.log("Contacto añadido:", resultado);
}).catch(error => {
    console.log("ERROR añadiendo contacto:", error);
});