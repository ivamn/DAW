const express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.redirect('/public/index.html');
});
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.listen(8080);