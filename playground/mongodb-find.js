const {MongoClient, ObjectID, Server} = require('mongodb');

const db_name = 'TodoApp';
const url = `mongodb://localhost:27017/${db_name}`;
MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log(err);
    }
    const db = client.db(db_name);
    const collection = db.collection('Todos');
    request = async () =>  {
        const todo = await collection.find({name: 'Jay'}).toArray();
        console.log(JSON.stringify(todo));
        client.close();
        return;
    };
    request();

});
