const express = require('express')
const path = require('path')
const routes = require('./Routes/index')
const app = express()
const port = 8484

//handle CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next()
})

//Set public directory to serve static files
app.use('/', express.static(path.join(__dirname, 'public')))

//redirect to home page
app.get('/', (req, res) => {
    res.redirect('/index.html')
})

//start using this routes
app.use('/', routes)

app.listen(port, () => {
    console.log('Server is running: localhost:8484')
})