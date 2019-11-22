const app = require('./src/app')

module.exports = (async () => {
  try {
    await app.init()
    console.log('Server is up!')
  } catch (error) {
    console.log('Error while trying to spin up the server')
    throw(error)
  }
})()