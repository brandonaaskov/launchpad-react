import React, { Component } from 'react'
import ReactToastr from 'react-toastr'
import userActions from '../actions/user-actions'

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
        lastName: ''
      }
    }

    userActions.init(this.update.bind(this))
  }

  update (stateSlice) {
    if (this.state.debugMode) console.log('updating slice of the state', stateSlice)

    this.setState(stateSlice)
  }

  copy (stateSlice) {
    return _.clone(this.state[stateSlice])
  }

  render () {
    let pathname = window.location.pathname

    return (
      <div>
        <ToastContainer toastMessageFactory={ToastMessageFactory} ref="container" className="toast-top-right" />
        <header className="app-header">
          <a href="/" className="logo">
            <img src="images/logo.png" height="50" width="50" />
          </a>

          <nav>
            <a href="/" className={pathname === '/' ? '' : 'active'}>Home</a>
            <a href="/contact" className={_.includes(pathname, 'contact') ? 'active' : ''}>Contact</a>
            <a href="/about-us" className={_.includes(pathname, 'about-us') ? 'active' : ''}>About Us</a>
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
