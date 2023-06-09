const renderIndex = (req,res)=>{
    res.render('index')
}
const verAPI = ()=>{
    fetch('https://botw-compendium.herokuapp.com/api/v2/entry/49')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data) // Se visualiza en la consola
    })
    .catch(error =>{
        console.log(error)
    })
}
module.exports ={
    renderIndex,
    verAPI
    //....
    // Se colocan las demas rutas 
    // que se vayan creado
}