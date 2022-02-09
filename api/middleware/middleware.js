function logger(req, res, next) {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next()
}

function validateUserId(req, res, next) {
  next()
}

function validateUser(req, res, next) {
  next()
}

function validatePost(req, res, next) {
  next()
}

// do not forget to expose these functions to other modules

module.exports ={
  logger,
  validateUserId,
  validateUser,
  validatePost,
}
