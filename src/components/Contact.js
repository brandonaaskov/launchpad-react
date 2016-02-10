import React, { Component } from 'react'
import { onTypeaheadChange } from '../actions/contact-actions'
import EmailForm from './EmailForm'

class Contact extends Component {
  render () {
    return (
      <div className="contact">
        <h1>Contact Us</h1>

        <EmailForm user={user}
                   onTypeaheadChange={onTypeaheadChange} />
      </div>
    )
  }
}

export default Contact
