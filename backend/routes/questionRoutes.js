const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router();

router.get('/7453859', questionController.firstQuestion);
router.get('/8358652', questionController.secondQuestion);
router.get('/1258438', questionController.thirdQuestion);
router.get('/5368832', questionController.fourthQuestion);
router.get('/0572381', questionController.fifthQuestion);
router.get('/7564833', questionController.sixthQuestion);
router.get('/8534959', questionController.seventhQuestion);
router.get('/1023945', questionController.eighthQuestion);
router.get('/3294917', questionController.ninthQuestion);
router.get('/4862910', questionController.tenthQuestion);

module.exports = router;
