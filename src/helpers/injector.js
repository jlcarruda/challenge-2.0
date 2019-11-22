const util = require('./utils')
const User = require('../components/user/model')

module.exports = (req, res, next) => {

  res.locals.UTILS = util
  res.locals.MODELS = {
    User
  }

  return next()
}