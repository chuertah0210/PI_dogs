const axios = require('axios');
require('dotenv').config();
const { key } = process.env;
const { Dog, Temperament } = require('../db')



const getAllDogs = async () => { //funcion para concatenar 
 
  const perros = await Dog.findAll();
    
  if (perros.length === 0) {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const razasDePerros = response.data.map((perro) => {

      let w = perro.weight.metric.split(' - ').length === 2
      ? (parseInt(perro.weight.metric.split(' - ')[0]) + parseInt(perro.weight.metric.split(' - ')[1])) / 2
      : parseInt(perro.weight.metric)

    let h = perro.height.metric.split(' - ').length === 2
      ? (parseInt(perro.height.metric.split(' - ')[0]) + parseInt(perro.height.metric.split(' - ')[1])) / 2
      : parseInt(perro.height.metric)

      return{
      id: perro.id,
      imagen: perro.image.url,
      nombre: perro.name,
      altura: Math.round(h),
      peso: Math.round(w),
      'años_de_vida':  parseInt(perro.life_span),
    }
  }
    );

    // Agregamos un insert en la base de datos
    await Dog.bulkCreate(razasDePerros);
    const perrosBD = await Dog.findAll();
    return perrosBD;
  }

  return perros;
}

const getIdDogs = async () => {
  const perros = await Dog.findAll({
    include: [{
      model: Temperament,
    }]
  });
  return perros;
 }

module.exports = { getAllDogs,getIdDogs };
