const express = require("express");
const os = require("os");

let app = express();

app.get("/fecha", (req, res) => {
    res.send("La fecha de hoy es : " + new Date().toLocaleDateString());
});

app.get("/usuario", (req, res) => {
    res.send(os.userInfo()["username"]);
});

app.listen(8080);