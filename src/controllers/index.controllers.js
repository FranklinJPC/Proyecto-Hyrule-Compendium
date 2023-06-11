
// API de armas
const weaponsAPI = (req,  res) => {
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

// API de Criaturas
const creaturesAPI = (req,  res) => {
  fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.data.non_food)
      res.render('creatures', data.data)
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
const renderAbout = (req, res)=>{
  res.render('about')
}

module.exports ={
    renderIndex,
    weaponsAPI,
    creaturesAPI,
    renderAbout
    //....
    // Se colocan las demas rutas 
    // que se vayan creado
}