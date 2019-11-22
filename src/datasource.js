const mongoose = require('mongoose')

mongoose.Promise = global.Promise

function connect(uri) {
  return new Promise((resolve, reject) => {
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

    mongoose.connection.on('connected', () => {
      console.log(`Connected to Database: ${uri}`)
      resolve(mongoose)
    })

    mongoose.connection.on('error', (e) => {
      console.log('Error while trying to connect to Database ...')
      reject(e)
    })
  })
}

module.exports = {
  connect,
  datasource: mongoose
}