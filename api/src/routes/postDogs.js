const { Router } = require('express');
const { Dog, Temperament } = require('../db')

const router = Router();

router.post('/', async (req, res) => {
    try {
        let { nombre, altura, peso, años_de_vida, imagen } = req.body;//le pido al body las propiedades que necesito
        let newDog = await Dog.create({nombre, altura, peso, años_de_vida, imagen});
        console.log(newDog);


        //newDog.addTemperament(tempsDb);
        res.status(200).send(newDog)
    } catch (error) {
        res.status(500).send("No pudimos crear la raza... Verifique que sean los valores adecuados!")
    }
})

module.exports = router