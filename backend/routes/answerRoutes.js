const express = require('express');
const answerController = require('../controllers/answerController');

const router = express.Router();

router.post('/7453859', answerController.firstAnswer);
router.post('/8358652', answerController.secondAnswer);
router.post('/1258438', answerController.thirdAnswer);
router.post('/5368832', answerController.fourthAnswer);
router.post('/0572381', answerController.fifthAnswer);
router.post('/7564833', answerController.sixthAnswer);
router.post('/8534959', answerController.seventhAnswer);
router.post('/1023945', answerController.eighthAnswer);
router.post('/3294917', answerController.ninthAnswer);
router.post('/4862910', answerController.tenthAnswer);

module.exports = router;
