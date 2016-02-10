import _ from 'lodash' // eslint-disable-line no-unused-vars
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import App from './components/App' // the main shell (holds the state tree)
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

import './styles/index.scss'

let history = createHistory()

let pages = {
  home: {
    name: 'home',
    path: 'home',
    component: Home
  },
  contact: {
    name: 'contact',
    path: 'contact',
    component: Contact
  },
  aboutUs: {
    name: 'aboutUs',
    path: 'about-us',
    component: AboutUs
  }
}

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route {...pages.aboutUs} />
      <Route {...pages.contact} />
    </Route>
  </Router>
), document.getElementById('root'))
