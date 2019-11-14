const Express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

const app = Express()

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

routes(app)

app.listen(3000, () => {
  console.log(`Server is in ${process.env.NODE_ENV} mode!`)
  console.log(`Its ALIVE!`)
})