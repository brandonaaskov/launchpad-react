import jQuery from 'jquery'
import { getUser } from '../utils/user'

function getHeaders (user = {}) {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-user-id': (user && user.id) ? user.id : undefined,
    'x-session-id': (user && user.sessionId) ? user.sessionId : undefined
  }
}

export function makeRequest (endpoint) {
  let user = getUser()
  let payload = endpoint.payload ? JSON.stringify(endpoint.payload) : undefined

  return jQuery.ajax({
    method: endpoint.method.toLowerCase(),
    url: _.clone(endpoint.url),
    headers: getHeaders(user),
    data: payload,
    dataType: 'json'
  })
}
