const express = require('express');
const dogsIdController = require('../controllers/dogsIdController');

const app = express();

app.get('/:idRaza', dogsIdController.getIdBreed);

module.exports = app;