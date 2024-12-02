
require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Stack API!');
});
app.listen(4001,()=>console.log('Server started at : 4001'))


app.use('/postMessages',postMessageRoutes) 
