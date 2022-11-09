const http = require('http');
const express = require('express');
const path = require('path');
// const bodyparser = require('body-parser');
var mongoose = require('mongoose');
const port = 8000;
const hostname = '127.0.0.1';
const app = express();

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/home', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});

app.post('/contact', (req, res) => {
    var myData=new contact(req.body);
    myData.save().then(()=>{
        res.send(`SUBMITTED`)
        }).catch(()=>{
        res.status(400).send(`DENIED`)
    });

    // res.status(200).render('contact.pug');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


// // const { stringify } = require('nodemon/lib/utils');
mongoose.connect('mongodb://localhost:27017/contactDance', { useNewUrlParser: true, useUnifiedTopology: true });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', function () {
// //     console.log("Connected");
// // });

var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    feedback: String

});

// kittySchema.methods.speak = function speak() {
//     var greeting = "Hello " + this.name
//     console.log(greeting);
// };

var contact = mongoose.model('contact', contactSchema);

// var harryKitty = new Kitten({ name: 'vaishnavi' });
// // console.log(harryKitty.name);
// // harryKitty.speak();

// harryKitty.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// })

// Kitten.find({ name: 'vaishnavity'}, function (err, result) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });
