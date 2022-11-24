const express = require('express');
const answerController = require('../controllers/answerController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

// USER MUST BE LOGGED IN TO ACCESS THE FOLLOWING ROUTES
router.use(authController.protect);

router.post(
  '/round/1/answer/11',
  userController.getMe,
  answerController.firstAnswer1
);

router.post(
  '/round/1/answer/1',
  userController.getMe,
  answerController.firstAnswer
);
router.post(
  '/round/1/answer/2',
  userController.getMe,
  answerController.secondAnswer
);
router.post(
  '/round/1/answer/3',
  userController.getMe,
  answerController.thirdAnswer
);
router.post(
  '/round/1/answer/4',
  userController.getMe,
  answerController.fourthAnswer
);
router.post(
  '/round/2/answer/1',
  userController.getMe,
  answerController.fifthAnswer
);
router.post(
  '/round/2/answer/2',
  userController.getMe,
  answerController.sixthAnswer
);
router.post(
  '/round/2/answer/3',
  userController.getMe,
  answerController.seventhAnswer
);
router.post(
  '/round/2/answer/4',
  userController.getMe,
  answerController.eighthAnswer
);
router.post(
  '/round/3/answer/1',
  userController.getMe,
  answerController.ninthAnswer
);
router.post(
  '/round/3/answer/2',
  userController.getMe,
  answerController.tenthAnswer
);
router.post(
  '/round/3/answer/3',
  userController.getMe,
  answerController.eleventhAnswer
);

module.exports = router;
