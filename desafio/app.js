const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')

const app = express();
const rotaRoute = require('./routes/rotas')
app.use(bodyParser.json());
app.use('/', rotaRoute);

mongoose.connect(process.env.DB_CONECTION, () => console.log('entramos'))
app.listen(3000);