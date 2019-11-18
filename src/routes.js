const { loadControllers } = require('./utils/routesUtils')

module.exports = async (app) => {
  const controllers = await loadControllers()

  app.get('/test', controllers.user.signIn)
}