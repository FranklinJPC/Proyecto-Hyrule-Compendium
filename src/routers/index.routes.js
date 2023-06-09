const {Router} = require('express')
const {/*rutas*/renderIndex, verAPI} = require('../controllers/index.controllers.js')

const router = Router()

router.get('/', renderIndex)
router.get('/apiPrueba', verAPI)
//....
// Se colocan las demas 

module.exports = router