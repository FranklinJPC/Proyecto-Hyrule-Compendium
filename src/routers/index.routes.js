const {Router} = require('express')
const {/*rutas*/renderIndex,  weaponsAPI, creaturesAPI, renderAbout} = require('../controllers/index.controllers.js')


const router = Router()

router.get('/', renderIndex)
router.get('/apiPrueba', weaponsAPI)
router.get('/armas', weaponsAPI)
router.get('/creatures', creaturesAPI)
router.get('/about', renderAbout)

//....
// Se colocan las demas 

module.exports = router