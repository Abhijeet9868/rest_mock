const controllers = require('../controllers/entity')
const verifyToken = require('../middleware/auth')
const router = require('express').Router()

router.get('/:entity',verifyToken, controllers.getAllEntities)
router.get('/:entity/:id',verifyToken, controllers.getEntityById)
router.post('/:entity',verifyToken, controllers.addEntity)
router.put('/:entity/:id',verifyToken, controllers.updateEntity)
router.delete('/:entity/:id',verifyToken, controllers.deleteEntity)
module.exports = router
