import React, { Component } from 'react'

class EmailForm extends Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    showToastr: React.PropTypes.func,
    onTypeaheadChange: React.PropTypes.func
  };

  handleInputChange (event) {
    let { onTypeaheadChange } = this.props

    onTypeaheadChange(event.currentTarget.value)
  }

  handleButtonClick () {
    let { showToastr, user } = this.props

    let message = (user.emailIsValid) ? `Thanks for playing ${user.email}` : `${user.email} is invalid`
    let type = (user.emailIsValid) ? 'success' : 'warning'
    showToastr(message, type)
  }

  render () {
    let { user } = this.props
    let css = 'email-form'
    css += (user.emailIsValid) ? ' valid' : ' invalid'

    return (
      <div className={css}>
        <input type="text" className="email" onChange={this.handleInputChange.bind(this)} />
        <button className='btn' onClick={this.handleButtonClick.bind(this)}>Submit to Nowhere</button>
      </div>
    )
  }
}

export default EmailForm
