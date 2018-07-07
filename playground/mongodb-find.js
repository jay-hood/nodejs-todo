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
        await collection.insert({task: 'Finish MongoDB section', name: 'Jay', completed: false})
            .catch(err => console.log(err));
        const todo_jay = await collection.find({name: 'Jay'}).toArray();
        await collection.findOneAndUpdate({task: 'Finish MongoDB section'},
            {$set: {name: 'Kaizer Soze', completed: true}})
            .catch(err => console.log(err));
        await collection.deleteMany({name: 'Jay'});
        const todo = await collection.find().toArray();
        console.log(JSON.stringify(todo));
        client.close();
        return;
    };
    request();
    // added test comment
    
});
