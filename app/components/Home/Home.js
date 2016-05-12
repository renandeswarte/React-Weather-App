import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import CitySeachContainer from '../CitySeach/CitySeachContainer'
import AddCityContainer from '../AddCity/AddCityContainer'
import FontAwesome from 'react-fontawesome'
import './Home.scss'

class Home extends React.Component {
  render() {
    return (
      <MainContainer pageName="Home">
        <h1>My Cities</h1>
        {/*<CitySeachContainer />*/}
        <div className="test-container row">
          <div className="test col-xs-12 col-sm-4"><div className="innerContainer">test</div></div>
          <div className="test col-xs-12 col-sm-4"><div className="innerContainer">test</div></div>
          <div className="test col-xs-12 col-sm-4"><div className="innerContainer">test</div></div>

          <div className="test col-xs-12 col-sm-4">
            <div className="innerContainer">
              <FontAwesome name="plus-square-o" className="add-city"/>
              <AddCityContainer />
            </div>
          </div>
        </div>
      </MainContainer>
    )
  }
}

export default Home