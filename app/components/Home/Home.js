import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import PromptContainer from '../Prompt/PromptContainer'
import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <MainContainer pageName="Home">
        <h1>Hello World</h1>
        <img src='../assets/pictures/blue-square.jpg'/>
        <Link to='/page-one'>
          <button className="btn btn-lg">
            Link to page 1
          </button>
        </Link>
        <PromptContainer />
      </MainContainer>
    )
  }
}

export default Home