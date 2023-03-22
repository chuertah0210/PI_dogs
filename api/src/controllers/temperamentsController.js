const axios = require('axios');
const { Temperament,DogTemperament } = require('../db')

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

          
         const temp_aux2 = temperamentos.map((perro) => {
          return perro['temperament'].split(',').map((temperamento) =>
          {return{
            id: perro['id'],
            nombre: temperamento.trim(),
          }
          } );
        });
        
        let newDogTemp=[];

        for (let i = 0; i < 7; i++) {
          temp_aux2[i].forEach(element => {
            let elementoArray2 = tempUnicDogs.find((el) => el.nombre === element.nombre);
            newDogTemp.push({
              'dogId':element.id,
            'temperamentId': elementoArray2.id});
          });
        }
        
        
        await DogTemperament.bulkCreate(newDogTemp);

          return res.status(200).json({ temp_aux });
        }
    
        return res.status(200).json({ tempPerros });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};
