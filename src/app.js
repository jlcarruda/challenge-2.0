const Express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = Express()

app.use(helmet())
app.use(bodyParser.json())
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

exports.init = async () => {
  await routes(app)
  return app.listen(3000)
}