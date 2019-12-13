const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/book-store', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});


