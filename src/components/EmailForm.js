import React, { Component } from 'react'

class EmailForm extends Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    onTypeaheadChange: React.PropTypes.func
  }

  render () {
    let { onTypeaheadChange } = this.props

    return (
      <div className="email-form">
        <input type="text" onChange={onTypeaheadChange} />
        <button className='btn' type="submit">Submit to Nowhere</button>
      </div>
    )
  }
}

export default EmailForm
