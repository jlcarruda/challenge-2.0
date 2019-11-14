const { loadControllers } = require('./utils/routesUtils')

module.exports = async (app) => {
  const controllers = await loadControllers()
  
  app.get('/', controllers.users.signIn)
}