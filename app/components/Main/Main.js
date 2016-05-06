import React from 'react'
import HeaderContainer from '../Header/HeaderContainer'
import './Main.scss'

class Main extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}

export default Main