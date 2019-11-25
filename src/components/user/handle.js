module.exports.signUp = [
  (req, res, next) => {
    next()
  }
]

module.exports.test = (req, res, next) => {
  res.locals.DATA = "Hello World"
  next()
}