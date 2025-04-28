module.exports = (err, req, res, next) => {
  console.error('Error:', err); // Log full error (good for server logs)

  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
