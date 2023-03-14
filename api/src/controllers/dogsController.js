const axios = require('axios');
const { Dog } = require('../db')

exports.getAllDogs = async (req, res) => {


    try {
        const perros = await Dog.findAll();
    
        if (perros.length === 0) {
          const response = await axios.get('https://api.thedogapi.com/v1/breeds');
          const razasDePerros = response.data.map((perro) => (
            {
            id: perro.id,
            imagen: perro.image.url,
            nombre: perro.name,
            altura:parseInt( perro.height.metric),
            peso: parseInt(perro.weight.metric),
            'años_de_vida':  parseInt(perro.life_span),
          }));
    
          // Agregamos un insert en la base de datos
          await Dog.bulkCreate(razasDePerros);
          return res.status(200).json({ razasDePerros });
        }
    
        return res.status(200).json({ perros });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};
