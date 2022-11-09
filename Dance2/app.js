const http = require('http');
const express = require('express');
const app = express();
const pug = require('pug');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

app.use('/static', express.static('public'));
app.use(express.urlencoded());

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('base.pug');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});