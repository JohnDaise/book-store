const mongoose = require('mongoose')


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


module.exports = Book