const app = require('./server.js')
require('dotenv').config

app.listen(app.get('port'),()=>{
    console.log(`Servidor en Puerto: ${app.get('port')}`)
})