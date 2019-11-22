const Express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')
const injector = require('./helpers/injector')
const { handleRequests } = require('./helpers/utils')
const { handleError } = require('./helpers/errorHandler')

const app = Express()

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(injector)

routes(app)

app.use((req, res) => {
  if (!req.route) {
    return res.sendStatus(404)
  }

  handleRequests(res.locals.statusCode || 200, res)
}, handleError)

exports.init = async (port = 8080) => {

  return new Promise((resolve, reject) => {
    app.listen(port, (err) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}