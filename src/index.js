const express = require('express')
require('./db/mongoose')

const Book = require('./models/book')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/books', (req, res) => {
    const book = new Book(req.body)

    book.save().then(() => {
        res.send(book)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})