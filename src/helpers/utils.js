function handleRequests(statusCode, response, body = response.locals.DATA) {
  if (body === undefined) {
    return response.status(204).send()
  }

  response.status(statusCode).send(body)
}

function clearData(object, parametersToRemove = []) {
  parametersToRemove.forEach( e => {
    if (e.includes('.')) {
      let path = e.split('.')

      path.reduce( (acc, key, index) => {
        if (acc) {
          if (index === path.length -1) {
            delete acc[key]
            return true
          }
          return acc[key]
        }
      }, object)
    } else {
      delete object[e]
    }
  })
}

module.exports = {
  handleRequests,
  clearData
}