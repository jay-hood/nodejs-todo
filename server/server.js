const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const variables = require('../server-variables/variables');
const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

const app = express();
const port = process.env.PORT || 3000

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

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) {
        console.log('invalid object id');
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        res.send({todo});
    }, err => res.status(400).send(err));
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) {
        console.log('invalid object id');
        res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((err) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};