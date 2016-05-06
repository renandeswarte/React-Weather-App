import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import './Home.scss'

function Home() {
  return (
    <MainContainer>
      <h1>Hello World</h1>
      <img src='../assets/pictures/blue-square.jpg'/>
      <Link to='/page-one'>
        <button className="btn btn-lg">
          Link to page 1
        </button>
      </Link>
    </MainContainer>
  )
}

export default Home