import { makeRequest } from '../utils/api'
import { LOGIN, GET_CURRENT_USER } from '../constants/apiEndpoints'

function init () {
  makeRequest(GET_CURRENT_USER).then((user) => {
    update({ user })
  })
}

function login (email, password) {
  let endpoint = _.assign({}, LOGIN)
  _.assign(endpoint.payload, { email, password })

  return makeRequest(endpoint)
}

module.exports = {
  init,
  login
}
