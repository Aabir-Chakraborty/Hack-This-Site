const express = require('express');
const answerController = require('../controllers/answerController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// USER MUST BE LOGGED IN TO ACCESS THE FOLLOWING ROUTES
router.use(authController.protect);

router.post('/7453859', userController.getMe, answerController.firstAnswer);
router.post('/8358652', userController.getMe, answerController.secondAnswer);
router.post('/1258438', userController.getMe, answerController.thirdAnswer);
router.post('/5368832', userController.getMe, answerController.fourthAnswer);
router.post('/0572381', userController.getMe, answerController.fifthAnswer);
router.post('/7564833', userController.getMe, answerController.sixthAnswer);
router.post('/8534959', userController.getMe, answerController.seventhAnswer);
router.post('/1023945', userController.getMe, answerController.eighthAnswer);
router.post('/3294917', userController.getMe, answerController.ninthAnswer);
router.post('/4862910', userController.getMe, answerController.tenthAnswer);

module.exports = router;
