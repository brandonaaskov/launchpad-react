import postal from 'postal'
import * as events from '../constants/events'

let channel = postal.channel('contact')

function init (update, copy) {
  channel.subscribe(events.EMAIL_ADDRESS_CHANGED, function (email) {
    let user = copy('user')
    _.assign(user, { email, emailIsValid: isEmail(email) })
    update({ user })
  })
}

function isEmail (email = '') {
  let regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

  return regex.test(email)
}

function onTypeaheadChange (email) {
  channel.publish(events.EMAIL_ADDRESS_CHANGED, email)
}

module.exports = {
  init,
  onTypeaheadChange,
  contactChannel: channel
}
