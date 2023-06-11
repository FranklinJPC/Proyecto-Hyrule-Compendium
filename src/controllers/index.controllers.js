
const verAPI = (req, res) => {
    fetch('https://botw-compendium.herokuapp.com/api/v2/entry/49')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Almacena el JSON en una variable
        
        const jsonVariable = data;
        console.log(jsonVariable); 
        res.json(data);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los datos de la API' });
      });
  };

const renderIndex = (req,res)=>{
    res.render('index')
}
// const renderAPI = (req, res) =>{
//     res.json(controllerAPI)
// }

module.exports ={
    renderIndex,
    verAPI
    //....
    // Se colocan las demas rutas 
    // que se vayan creado
}