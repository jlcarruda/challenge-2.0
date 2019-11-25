const Express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const routes = require('./routes')
const injector = require('./helpers/injector')
const { handleRequests } = require('./helpers/utils')
const { handleError, validateResult } = require('./helpers/errorHandler')
const datasource = require('./datasource')
const { httpLogger } = require('./logger')

const app = Express()

module.exports.init = async () => {
  app.use(helmet())
  app.use(bodyParser.json())
  app.use(httpLogger)
  app.use(injector)

  routes(app)

  app.use(validateResult)
  app.use((req, res) => {
    if (!req.route) {
      return res.sendStatus(404)
    }

    handleRequests(res.locals.statusCode || 200, res)
  }, handleError)
}

module.exports.startDatasource = async () => {
  try {
    await datasource.connect(process.env.DATABASE_URI)
  } catch(e) {
    return Promise.reject(e)
  }
}

module.exports.listen = async (port = 8080) => {
  await app.listen(port, (err) => {
    if (err) {
      return Promise.reject(err)
    }
    Promise.resolve()
  })
}

module.exports.app = app