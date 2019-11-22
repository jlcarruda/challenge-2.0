const util = require('./utils')

module.exports = (req, res, next) => {

  res.locals.UTILS = util

  return next()
}