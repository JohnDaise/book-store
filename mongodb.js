const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'book-store'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName);

    db.collection('books').insertOne({
        title: 'Beloved',
        author: 'Toni Morrison',
        description: 'A classic',
        price: 6
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })

})