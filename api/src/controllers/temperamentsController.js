const axios = require('axios');
const { Temperament } = require('../db')

exports.getTemperaments = async (req, res) => {


    try {
        const tempPerros = await Temperament.findAll();
    
        if (tempPerros.length === 0) {
          const response = await axios.get('https://api.thedogapi.com/v1/breeds');
          const perrosDeAPI = response.data;
          
         const temperamentos = perrosDeAPI.filter(perrosDeAPI => perrosDeAPI['temperament'])

         const temp_aux = temperamentos.map((perro) => {
            return perro['temperament'].split(',').map((temperamento) => temperamento.trim());
          });
    
          const valoresUnicos = [...new Set(temp_aux.flatMap(arr => arr))];

          const tempUnicDogs = valoresUnicos.map((tmp,index) => (
            {
            id: index+1,
            nombre: tmp,
          }));
          await Temperament.bulkCreate(tempUnicDogs);

       //console.log( tempUnicDogs);
    
          // Agregamos un insert en la base de datos
         // await Dog.bulkCreate(razasDePerros);
          return res.status(200).json({ temp_aux });
        }
    
        return res.status(200).json({ tempPerros });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};
