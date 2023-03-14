const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogs =  require('./getAllDogs.js')
const getIdBreed =  require('./getIdDogBreed')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getAllDogs);
router.use('/dogs/', getIdBreed);


module.exports = router;
