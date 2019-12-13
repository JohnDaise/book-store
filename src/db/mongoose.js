const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/book-store', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Book = mongoose.model('Book', {
    title: {
        type: String,
        required: true, 
        trim: true
    },
    author: {
        type: String,
        default: 'N/A',
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        default: 0
    }  
})
