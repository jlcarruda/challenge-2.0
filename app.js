require('dotenv').config()
const app = require('./src/app')

module.exports = (() => {
  app.init()
    .then(app.startDatasource)
    .then(app.listen)
    .then(() => {
      console.log('Server is up!')
    })
    .catch(e => {
      console.log('Error while trying to spin up the server')
      throw(error)
    })
})()