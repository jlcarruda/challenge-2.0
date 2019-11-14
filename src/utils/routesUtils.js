const { getComponentsOnGlob } = require('./globUtils')

async function loadControllers() {
  const controllersPath = await getComponentsOnGlob('**/*Controller.js')
  const controllers = {}

  controllersPath.forEach(path => {
    let pathSplitted = path.split('/')
    controllers[pathSplitted[pathSplitted.length - 2]] = require(`${process.cwd()}/${path}`)
  })
  return controllers
}

module.exports = { loadControllers }