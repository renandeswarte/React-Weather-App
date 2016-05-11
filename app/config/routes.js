import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main/Main'
import Home from '../components/Home/Home'
import WeatherCityContainer from '../components/WeatherCity/WeatherCityContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/weather-city/' component={WeatherCityContainer} />
    </Route>
  </Router>
)

export default routes