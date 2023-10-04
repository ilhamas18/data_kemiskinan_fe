const router = require('express').Router();
const UserKotaController = require('../controllers/userKotaController');

router.get('/getAllUserKota/:condition', UserKotaController.getAllUserKota);

module.exports = router;