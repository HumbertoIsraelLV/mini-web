const express = require('express');

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');





app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Humberto',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});
app.listen(port, () => console.log(`Escuchando peticiones en puerto ${port}`));