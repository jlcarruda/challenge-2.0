const mongoDatasource = require('./mongoDatasource')

const datasources = {
  development: mongoDatasource
}

const startDatasource = async (env = process.env.NODE_ENV) => {
  try {
    await datasources[env || 'development'].connect(process.env.DATABASE_URI)
  } catch(e) {
    return Promise.reject(e)
  }
}

module.exports = {
  startDatasource
}

