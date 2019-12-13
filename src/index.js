const express = require('express')
require('./db/mongoose')

const Book = require('./models/book')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/books', (req, res) => {
    const book = new Book(req.body)

    book.save().then(() => {
        res.status(201).send(book)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/books', (req, res) => {
    Book.find({}).then((books) => {
        res.send(books)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/books/:id', (req, res) => {
    console.log(req.params)
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})