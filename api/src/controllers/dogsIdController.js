const axios = require('axios');
const { Dog } = require('../db')

exports.getIdBreed = async (req, res) => {
  //console.log(req.params);
  const { idRaza } = req.params;
  const id = idRaza;

    try {
      const perros = await Dog.findAll({
        where: {
          id,
        },
      });
    console.log(idRaza);
    console.log(id);
        if (perros.length === 0) {
          const response = await axios.get('https://api.thedogapi.com/v1/breeds');
          
          const perrosDeAPI = response.data.find((elemento) => elemento.id === parseInt(idRaza));
          
          return res.status(200).json({ perrosDeAPI });
        }
    
        return res.status(200).json({ perros });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};
