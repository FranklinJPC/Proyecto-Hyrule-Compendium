
// API de prueba
const verAPI = (req,  res) => {
    fetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Almacena el JSON en una variable
        // const jsonVariable = data;
        // data.data.forEach(element => {
        //   console.log(element.name)
        // });
        // console.log(data.data[1])
        //console.log(jsonVariable); 
        res.render('armas', data
          //data: `${data.data}`
          // name: `${data.data}`,
          // image: `${data.data}`,
          // description: `${data.data}`
        )
        //res.json(data);
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
    //....
    // Se colocan las demas rutas 
    // que se vayan creado
}