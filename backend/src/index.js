const express = require('express');
const mongoose = require('mongoose');
const dotenv =  require('dotenv');

const app = express(); 

app.use(express.urlencoded({ extended: true }));

const routes = require('./routes');

const DB =  process.env.DB;

mongoose.connect(DB ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connect!");
}).catch(() => {
    console(error);
})

app.use(express.json()); 
app.use(routes);

app.listen(3333);