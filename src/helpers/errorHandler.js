const { validationResult } = require('express-validator')

function validateResult(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return next({ errors: errors.array() })
  }

  next()
}

function handleError (errors, req, res, next) {
  return res.locals.UTILS.handleRequests(400, res, errors)
}

module.exports = {
  handleError,
  validateResult
}