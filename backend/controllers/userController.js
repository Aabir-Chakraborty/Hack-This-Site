const User = require('./../models/userModel');

// ROUTE TO PUT USER ID IN URL PARAMETERS
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

// ROUTE TO GET LEADERBOARD
exports.leaderboard = async (req, res, next) => {
  try {
    // FILTER USERS WITH CHEAT ATTEMPTS LESS THAN 3 THEN SORT ON THE BASIS OF SCORE IN DESCENDING ORDER
    const users = await User.find().sort({ totalFlags: -1 });

    // SEND NUMBER OF NOT-DISQUALIFIED MEMBERS AND LEADERBOARD
    res.status(200).json({
      status: 'success',
      results: users.length,
      users,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err.message,
    });
  }
};
