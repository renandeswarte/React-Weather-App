import React from 'react'
import FontAwesome from 'react-fontawesome'
import CitySeachContainer from '../CitySeach/CitySeachContainer'
import { Link } from 'react-router'

function Header(props) {
  return (
    <div className="container">
      <div className="left-menu-container col-xs-12 col-sm-8">
        <Link to='/'>
          <FontAwesome name='cloud' className='logo' />
          <h2>Weather App</h2>
        </Link>
      </div>
      <div className="right-menu-container col-xs-12 col-sm-4">
        <CitySeachContainer containerClass="header-city-form" />
      </div>
    </div>
  )
}

export default Header