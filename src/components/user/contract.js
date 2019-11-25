const { check } = require('express-validator')

module.exports.signUpContract = [
  check('name').isString(),
  check('email').isEmail(),
  check('password').isString(),
  check('phones').isArray()
]

module.exports.signInContract = [

]

module.exports.searchContract = [

]