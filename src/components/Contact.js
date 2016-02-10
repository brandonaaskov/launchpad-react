import React, { Component } from 'react'
import { onTypeaheadChange } from '../actions/contact-actions'
import { showMessage } from '../actions/toastr-actions'

import EmailForm from './EmailForm'

class Contact extends Component {
  render () {
    let { user } = this.props.state

    return (
      <div className="contact">
        <h1>Contact Us</h1>

        <EmailForm user={user}
                   showToastr={showMessage}
                   onTypeaheadChange={onTypeaheadChange} />
      </div>
    )
  }
}

export default Contact
