import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main/Main'
import Home from '../components/Home/Home'
import PageOne from '../components/PageOne/PageOne'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/page-one' component={PageOne} />
    </Route>
  </Router>
)

export default routes