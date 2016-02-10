import React, { Component } from 'react'
import ReactToastr from 'react-toastr'
import { Link } from 'react-router'
import userActions from '../actions/user-actions'
import contactActions from '../actions/contact-actions'
import toastrActions from '../actions/toastr-actions'

let { ToastContainer } = ReactToastr
let ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation)

class App extends Component {
  constructor (...args) {
    super(...[args])

    this.state = {
      debugMode: false,
      isFetchingData: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        emailIsValid: ''
      }
    }

    userActions.init(this.update.bind(this))
    contactActions.init(this.update.bind(this), this.copy.bind(this))
    toastrActions.init(this.notify.bind(this))
  }

  update (stateSlice) {
    if (this.state.debugMode) console.log('updating slice of the state', stateSlice)

    this.setState(stateSlice)
  }

  copy (stateSlice) {
    return _.clone(this.state[stateSlice])
  }

  notify (message, type = 'success') {
    this.refs.toastr[type]('', message, {
      closeButton: true
    })
  }

  render () {
    return (
      <div>
        <ToastContainer toastMessageFactory={ToastMessageFactory} ref="toastr" className="toast-top-right" />
        <header className="app-header">
          <Link to='/'>
            <img src="images/logo.png" height="50" width="50" />
          </Link>

          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About Us</Link>
            <Link to='/contact'>Contact</Link>
          </nav>

          <span className="user">{this.state.user.firstName} {this.state.user.lastName}</span>
        </header>
        {React.cloneElement(this.props.children, {
          state: this.state,
          update: this.update.bind(this),
          copy: this.copy.bind(this)
        })}
      </div>
    )
  }
}

export default App
