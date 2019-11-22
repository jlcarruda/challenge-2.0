
const User = require('./model')

module.exports = () => {

  return {
    save: async (req, res, next) => {
      try {
        let objectToBeSave = new res.locals.MODELS.user(req.body)

        res.locals.DATA = await objectToBeSave.save()
        res.locals.UTILS.createData(response.locals.DATA, [ 'senha', 'token' ])

        next()
      } catch (e) {
        next(e)
      }
    }
  }
}