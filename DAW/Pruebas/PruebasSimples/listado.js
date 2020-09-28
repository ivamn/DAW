const ruta = '/home/alumno';
const fs = require('fs');
fs.readdirSync(ruta).forEach(fichero => { console.log(fichero); });