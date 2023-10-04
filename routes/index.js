const router = require('express').Router();
const opdRouter = require('./opdRouter');
const userKotaRouter = require('./userKotaRouter');
const userOPDRouter = require('./userOPDRouter');

router.use('/opd', opdRouter);
router.use('/userKota', userKotaRouter);
router.use('/userOPD', userOPDRouter);

module.exports = router;