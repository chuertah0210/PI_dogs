const express = require('express');
const dogsController = require('../controllers/dogsController');

const app = express();

app.get('/', dogsController.getAllDogs);

module.exports = app;