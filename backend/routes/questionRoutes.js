const express = require('express');
const questionController = require('../controllers/questionController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/round/1/question/11', questionController.firstQuestion1);
router.get('/round/1/question/21', questionController.secondQuestion1);
router.get('/round/1/question/41', questionController.fourthQuestion1);
router.get('/round/2/question/11', questionController.fifthQuestion1);
router.get('/round/2/question/12', questionController.fifthQuestion2);
router.get('/round/2/question/13', questionController.fifthQuestion3);
router.get('/round/2/question/14', questionController.fifthQuestion4);

// USER MUST BE LOGGED IN TO ACCESS THE FOLLOWING ROUTES
router.use(authController.protect);

router.get('/round/1/question/1', questionController.firstQuestion);
router.get('/round/1/question/2', questionController.secondQuestion);
router.get('/round/1/question/3', questionController.thirdQuestion);
router.get('/round/1/question/4', questionController.fourthQuestion);
router.get('/round/2/question/1', questionController.fifthQuestion);
router.get('/round/2/question/2', questionController.sixthQuestion);
router.get('/round/2/question/3', questionController.seventhQuestion);
router.get('/round/2/question/4', questionController.eighthQuestion);
router.get('/round/3/question/1', questionController.ninthQuestion);
router.get('/round/3/question/2', questionController.tenthQuestion);
router.get('/round/3/question/3', questionController.eleventhQuestion);

module.exports = router;
