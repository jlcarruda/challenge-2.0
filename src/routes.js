const UserHandler = require('./components/user/handle')
const UserContract = require('./components/user/contract')

module.exports = async (app) => {

  app.get('/test', UserHandler.test)
  app.post('/sign_up', UserContract.signUpContract, UserHandler.signUp)
}