const {Router} = require('express')
const {renderIndex, verAPItesoros, verAPImonstruos, verAPImateriales, weaponsAPI, creaturesAPI, renderAbout} = require('../controllers/index.controllers.js')



const router = Router()

router.get('/', renderIndex)
router.get('/about', renderAbout)
router.get('/armas', weaponsAPI)
router.get('/tesoros', verAPItesoros)
router.get('/monstruos', verAPImonstruos)
router.get('/materiales', verAPImateriales)
router.get('/creatures', creaturesAPI)
//....
// Se colocan las demas 

module.exports = router