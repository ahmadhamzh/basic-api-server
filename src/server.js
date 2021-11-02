'use strict'

const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const foodRout = require('./routes/food.route');
const clothesRout = require('./routes/clothes.route')

app.use(express.json())
app.use(foodRout)
app.use(clothesRout)
function start() {
    app.listen(PORT,()=>{
        console.log(`listning to ${PORT}`);
    })
}

module.exports = {
    app,
    start
}