const express = require('express');
const dogsTemperaments = require('../controllers/temperamentsController');

const app = express();

app.get('/', dogsTemperaments.getTemperaments);

module.exports = app;