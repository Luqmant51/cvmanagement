// require express
const express = require('express');
// require ejs
require('ejs')
var cors = require('cors')

// body parser
const bodyParser = require("body-parser");
//cookie- parser require
const cookieParser = require('cookie-parser');

// use express or call the first function of express
const app = express()

//clearing cahce
app.disable('view cache');
// use cookie parser
app.use(cookieParser())

// Configurations for "body-parser"
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

//convet data into json
app.use(express.json())

//set ejs view engine
app.set('view engine', 'ejs')
    //making a static folder for CSS
app.use(express.static('public'))

// import user from user route
const User = require('./routes/index');
app.use(cors())
//use route 
app.use('/', User)


app.listen(3000, console.log(`http://localhost:${3000}`))