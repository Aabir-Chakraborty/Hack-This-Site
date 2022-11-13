const express = require('express');
const answerController = require('../controllers/answerController');

const router = express.Router();

router.post('/7453859', answerController.firstQuestion);
router.post('/8358652', answerController.secondQuestion);
router.post('/1258438', answerController.thirdQuestion);
router.post('/5368832', answerController.fourthQuestion);
router.post('/0572381', answerController.fifthQuestion);
router.post('/7564833', answerController.sixthQuestion);
router.post('/8534959', answerController.seventhQuestion);
router.post('/1023945', answerController.eighthQuestion);
router.post('/3294917', answerController.ninthQuestion);
router.post('/4862910', answerController.tenthQuestion);

module.exports = router;
