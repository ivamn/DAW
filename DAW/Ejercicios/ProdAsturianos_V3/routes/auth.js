/*
    Enrutador para los servicios de usuarios, exporta el enrutador para usarlo con el archivo principal.
*/

const express = require("express");

const Usuario = require(__dirname + "/../models/usuario.js");

const router = express.Router();

router.get("/login", (req, res) => {
    res.render('auth_login');
});

router.post('/login', (req, res) => {
    Usuario.find({ login: req.body.login, password: req.body.password }).then(resultado => {
        if (resultado && resultado.length) {
            req.session.usuario = resultado[0];
            res.redirect('/admin');
        } else {
            res.render('auth_login',
                { error: "Usuario o contraseña incorrectos" });
        }
    }).catch(error => {
        res.render('auth_login');
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;