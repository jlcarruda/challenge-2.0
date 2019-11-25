module.exports = (req, res, next) => {
  res.locals.DATA = "Hello World"
  next()
}