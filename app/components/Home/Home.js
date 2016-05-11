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
        <PromptContainer />
      </MainContainer>
    )
  }
}

export default Home