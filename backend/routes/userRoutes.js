const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/leaderboard', userController.leaderboard);

module.exports = router;
