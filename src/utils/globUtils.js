const glob = require('glob-promise')

function getComponentsOnGlob (query) {
  return glob(`src/components/${query}`).then(files => {
    return files
  })
}

async function getComponentsNames() {
  components = await getComponentsOnGlob('*')
  return components.map( componentPath => {
    splittedPath = componentPath.split('/')
    return splittedPath[splittedPath.length - 1]
  })
}

module.exports = { getComponentsNames, getComponentsOnGlob }