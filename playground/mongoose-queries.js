const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const {ObjectID} = require('mongodb');

const id = '5b440b0110dc870fab1ec71b';
const uid = '5b44115065ee5ef2b6a9ffa1';


// Todo.find({
//     _id: id
// }).then(todos => console.log('Todos', todos));

// Todo.findOne({
//     _id: id
// }).then(todo => console.log('Todos', todo));

Todo.findById(id).then(todo => {
    if(!todo) {
        console.log('id not found');
    } else if(!ObjectID.isValid(id)) {
        return console.log('ID is invalid');
    }
    console.log('Todo by id', todo);
}).catch(err => console.log(err));

User.findById(uid).then((user) => {
    if(!user) {
        console.log('no user with that id found')
    } else if (!ObjectID.isValid(uid)) {
        console.log('ID is invalid')
    }
    console.log('User by id', user);
}).catch(err => console.log(err));