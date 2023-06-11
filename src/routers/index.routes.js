const {Router} = require('express')
const {/*rutas*/renderIndex,  verAPI, renderArmas} = require('../controllers/index.controllers.js')


const router = Router()

router.get('/', renderIndex)
router.get('/apiPrueba', verAPI)
router.get('/armas', verAPI)
//....
// Se colocan las demas 

module.exports = router