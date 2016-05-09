import React from 'react'
import FontAwesome from 'react-fontawesome'
import PromptContainer from '../Prompt/PromptContainer'

function Header(props) {
  return (
    <div className="container">
      <div className="left-menu-container col-xs-12 col-sm-8">
        <FontAwesome name='cloud' className='logo' />
        <h2>Weather App</h2>
      </div>
      <div className="right-menu-container col-xs-12 col-sm-4">
        <PromptContainer containerClass="header-city-form" />
      </div>
    </div>
  )
}

export default Header