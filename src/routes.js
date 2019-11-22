// const { loadControllers } = require('./utils/routesUtils')

const userHandler = require('./components/user/handle')

module.exports = async (app) => {

  app.get('/test', userHandler)
}