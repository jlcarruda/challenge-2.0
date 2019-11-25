const util = require('./utils')
const User = require('../components/user/model')

const UserContract = require('../components/user/contract')

module.exports = (req, res, next) => {

  res.locals.UTILS = util

  res.locals.CONTRACTS = {
    user: UserContract
  }

  res.locals.MODELS = {
    User
  }

  return next()
}