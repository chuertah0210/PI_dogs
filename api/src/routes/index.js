const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogs =  require('./getAllDogs.js')
const getIdBreed =  require('./getIdDogBreed.js')
const getTemperaments = require('./getTemperaments.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getAllDogs);
router.use('/dogs/', getIdBreed);
router.use('/temperaments', getTemperaments);


module.exports = router;
