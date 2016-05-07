import React from 'react'
import FontAwesome from 'react-fontawesome'

function Header() {
  return (
    <div className="container">
      <FontAwesome name='cloud' className='logo' />
      <h2>Weather App</h2>
    </div>
  )
}

export default Header