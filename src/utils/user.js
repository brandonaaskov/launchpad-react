import _ from 'lodash'

function getUser () {
  return _.assign({}, JSON.parse(window.localStorage.getItem('user')))
}

function setUser (user) {
  window.localStorage.setItem('user', JSON.stringify(user))
}

function isAuthed () {
  let user = getUser()
  return !!(user && user.sessionId)
}

module.exports = {
  getUser,
  setUser,
  isAuthed,
}
