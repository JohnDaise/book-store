const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
// const port = process.env.PORT || 3000;
const port = 3000;

const pubDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(pubDirPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Book Form'
    })
})

app.get('/books', (req, res) => {
    res.render('books', {
        title: 'Inventory'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'John Daise',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port ' + port)
})