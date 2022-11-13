const errorResponse = (statusCode, err) => {
  res.status(statusCode).json({
    status: 'failed',
    err: err.message,
  });
};

module.exports = errorResponse;
