const router = require('express').Router();
const UserOPDController = require('../controllers/userOPDController');

router.get('/getAllUserOPD', UserOPDController.getUserOPD);

module.exports = router;