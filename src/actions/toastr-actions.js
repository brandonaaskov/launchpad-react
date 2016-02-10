import postal from 'postal'
import * as events from '../constants/events'

let channel = postal.channel('toastr')

function init (notify) {
  channel.subscribe(events.NOTIFY, function (payload) {
    console.log('message and type?', [payload.message, payload.type])
    notify(payload.message, payload.type)
  })
}

function showMessage (message, type) {
  channel.publish(events.NOTIFY, { message, type })
}

module.exports = {
  init,
  showMessage
}
