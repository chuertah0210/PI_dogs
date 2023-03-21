const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getTemperaments = require('./getTemperaments.js')
const getDogs = require('./getDogs')
const postDogs = require('./postDogs')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getDogs);
router.use('/temperaments', getTemperaments);
router.use('/dog', postDogs);


module.exports = router;
