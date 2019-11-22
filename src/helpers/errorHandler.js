function handleError (error, req, res, next) {
  return res.locals.UTILS.handleRequests(400, res, { error: "Algo aconteceu" })
}

module.exports = {
  handleError
}