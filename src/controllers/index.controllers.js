const axios = require('axios');

// API de armas

const weaponsAPI = (req, res) => {
  axios.get('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
    .then(response => {
      res.render('armas', response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
};
const creaturesAPI = (req,  res) => {
  axios.get('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
    .then(response => {
      res.render('creatures', response.data.data)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
}
const verAPItesoros = (req,  res) =>{
  axios.get('https://botw-compendium.herokuapp.com/api/v2/category/treasure')
    .then(response => {
      res.render('tesoros', response.data)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
}
const verAPImonstruos = (req,  res) =>{
  axios.get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
    .then(response => {
      res.render('monstruos', response.data)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
}
const verAPImateriales = (req,  res) =>{
  axios.get('https://botw-compendium.herokuapp.com/api/v2/category/materials')
    .then(response => {
      res.render('materiales', response.data)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
}

// Fecth
// const weaponsAPI = (req,  res) => {
//     fetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         res.render('armas', data
//         )
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json({ error: 'Error al obtener los datos de la API' });
//       });
// };

// API de Criaturas
// const creaturesAPI = (req,  res) => {
//   fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       res.render('creatures', data.data)
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ error: 'Error al obtener los datos de la API' });
//     });
// };

// const verAPItesoros = (req,  res) => {
//   fetch('https://botw-compendium.herokuapp.com/api/v2/category/treasure')
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       res.render('tesoros', data
//       )
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ error: 'Error al obtener los datos de la API' });
//     });
// };

// const verAPImonstruos = (req,  res) => {
//   fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       res.render('monstruos', data
//       )
//       res.render('creatures', data.data)
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ error: 'Error al obtener los datos de la API' });
//     });
// };

// const verAPImateriales = (req,  res) => {
//   fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       res.render('materiales', data
//       )
//     })
//     .catch(error => {
//       console.log(error);
//       res.status(500).json({ error: 'Error al obtener los datos de la API' });
//     });
// };

// Envio a las rutas
const renderIndex = (req,res)=>{
    res.render('index')
}
const renderAbout = (req, res)=>{
  res.render('about')
}
const renderError = (req, res)=>{
  res.render('error')
}
// const renderBusqueda = (req, res) =>{
//   res.render('buscar')
// }

module.exports ={
    renderIndex,
    creaturesAPI,
    verAPItesoros,
    verAPImonstruos,
    verAPImateriales,
    weaponsAPI,
    renderAbout,
    renderError,
    //renderBusqueda
}