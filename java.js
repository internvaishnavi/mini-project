const http = require('http');
const fs = require("fs");
let home = fs.readFileSync("./nav.html");
let about = fs.readFileSync("./about.html");
let service = fs.readFileSync("./service.html");
let contact = fs.readFileSync("./contact.html");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
   
    if (url == '') {
        res.end(home);
    }
    else if (url == '/contact') {
        res.end(contact);
    }
    else if (url == '/about') {
        res.end(about);
    }
    else if (url == '/service') {
        res.end(service);
    }
    else {
        res.statusCode = 404;
        res.end("404 is not found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 