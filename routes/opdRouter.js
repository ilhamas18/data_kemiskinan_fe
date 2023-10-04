const router = require('express').Router();
const OPDController = require('../controllers/opdController');

router.get('/getAllOPD', OPDController.getAllDataOPD);
router.get('/syncOPD', OPDController.syncDataOPD);

module.exports = router;