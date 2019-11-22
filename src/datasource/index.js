const mongoose = require('mongoose')

mongoose.Promise = global.Promise

function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true })

    mongoose.connection.on('connected', () => {
      console.log(`Connected to Database: ${process.env.DATABASE_URL}`)
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