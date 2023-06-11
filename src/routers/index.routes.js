const {Router} = require('express')
const {renderIndex,  verAPI, verAPItesoros, verAPImonstruos, verAPImateriales} = require('../controllers/index.controllers.js')


const router = Router()

router.get('/', renderIndex)
router.get('/apiPrueba', verAPI)
router.get('/armas', verAPI)
router.get('/tesoros', verAPItesoros)
router.get('/monstruos', verAPImonstruos)
router.get('/materiales', verAPImateriales)
//....
// Se colocan las demas 

module.exports = router