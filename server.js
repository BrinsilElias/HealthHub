const express = require('express')
const app = express()
const port = 8080
const database = require('./database')
const bodyParser = require('body-parser'); // Import body-parser middleware
app.set("view engine", "ejs")

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Root route for 
app.get('/', (req, res) => {
    const searchTerm = req.query.searchterm;
    const datas = database.getData(searchTerm)
    res.render("index.ejs", {
        datas
    })
})

app.get('/add', (req, res) => {
    res.render('addfile.ejs')
})

app.post('/', (req, res) => {
    const data = req.body
    database.addData(data)
    res.redirect('/')
})

app.get('/data', (req, res) => {
    const data = database.getData()
    res.send(data)
})

app.post('/:id/delete', (req, res) => {
    const id = +req.params.id
    database.deleteData(id)
    res.redirect('/')
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`app running on port http://localhost:${port}`)
}) 