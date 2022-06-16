const express = require('express');
const app = express()
const routes = require('./routes/index');

app.use(express.json())
console.log("ok");
app.use(routes)

app.listen(3000, console.log(`http://localhost:${3000}`))