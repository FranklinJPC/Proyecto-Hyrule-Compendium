// API de prueba
const verAPI = (req,  res) => {
    fetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
      .then(response => {
        return response.json();
      })
      .then(data => {
        res.render('armas', data
        )
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los datos de la API' });
      });
};

const verAPItesoros = (req,  res) => {
  fetch('https://botw-compendium.herokuapp.com/api/v2/category/treasure')
    .then(response => {
      return response.json();
    })
    .then(data => {
      res.render('tesoros', data
      )
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
};

const verAPImonstruos = (req,  res) => {
  fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
    .then(response => {
      return response.json();
    })
    .then(data => {
      res.render('monstruos', data
      )
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
};

const verAPImateriales = (req,  res) => {
  fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
    .then(response => {
      return response.json();
    })
    .then(data => {
      res.render('materiales', data
      )
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API' });
    });
};

// Envio a las rutas
const renderIndex = (req,res)=>{
    res.render('index')
}

module.exports ={
    renderIndex,
    verAPI,
    verAPItesoros,
    verAPImonstruos,
    verAPImateriales,
}