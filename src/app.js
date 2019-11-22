const Express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const routes = require('./routes')
const injector = require('./helpers/injector')
const { handleRequests } = require('./helpers/utils')
const { handleError } = require('./helpers/errorHandler')
const datasource = require('./datasource')
const { httpLogger } = require('./logger')

const server = Express()

exports.init = async (databaseUrl = process.env.DATABASE_URI, port = 8080) => {
  server.use(helmet())
  server.use(bodyParser.json())
  server.use(httpLogger)
  server.use(injector)

  try {
    await datasource.connect(databaseUrl)
  } catch(e) {
    return Promise.reject(e)
  }

  routes(server)

  server.use((req, res) => {
    if (!req.route) {
      return res.sendStatus(404)
    }

    handleRequests(res.locals.statusCode || 200, res)
  }, handleError)

  server.listen(port, (err) => {
    if (err) {
      return Promise.reject(err)
    }
    Promise.resolve()
  })
}