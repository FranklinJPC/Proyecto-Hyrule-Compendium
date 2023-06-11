const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')
const app = express()

// Configuraciones del servidor
app.set('port', process.env.port || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: 'main',  // Layout principal
    layoutsDir:path.join(app.get('views'), 'layouts'), // Directorio principal
    partialsDir:path.join(app.get('views'), 'partials'), // Directorio de partials/componentes
    extname:'.hbs' // Extesion de las plantillas
}))
app.set('view engine', '.hbs')

app.use(express.urlencoded({extended:false}))
// Rutas 
app.use(require('./routers/index.routes'))

// Al usar archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app