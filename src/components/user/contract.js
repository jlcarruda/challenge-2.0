const { check } = require('express-validator')

module.exports.signUpContract = [
  check('name').isString(),
  check('email').isEmail(),
  check('password').isString(),
  check('phones').isArray()
]

module.exports.signInContract = [
  check('email').isEmail(),
  check('password').isString()
]

module.exports.searchContract = [
  check('user_id').isNumeric()
]