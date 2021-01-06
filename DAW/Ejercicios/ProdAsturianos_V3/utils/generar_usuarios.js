const Usuario = require(__dirname + '/../models/usuario');

Usuario.collection.drop();
let usu1 = new Usuario({
    login: 'may123',
    password: '12341234'
});
usu1.save();

let usu2 = new Usuario({
    login: 'nacho123',
    password: '12341234'
});
usu2.save();
