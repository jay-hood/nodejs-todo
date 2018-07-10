const express = require('express');
const bodyParser = require('body-parser');

const variables = require('../server-variables/variables');
const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    // pass request and result callback
    // find gets everything, and the then() function takes two parameters, a succes (object gets passed)
    // or an error, in case there is a fail condition
    Todo.find().then((todos) => {
        res.send({todos});
    }, err => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};