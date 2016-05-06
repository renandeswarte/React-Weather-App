import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import './PageOne.scss'

function PageOne() {
  return (
    <MainContainer>
      <h1>Page One</h1>
      <Link to='/'>
        <button className="btn btn-lg">
          Link to Home
        </button>
      </Link>
    </MainContainer>
  )
}

export default PageOne