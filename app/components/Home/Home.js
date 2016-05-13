import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import CitySeachContainer from '../CitySeach/CitySeachContainer'
import AddCityContainer from '../AddCity/AddCityContainer'
import FontAwesome from 'react-fontawesome'
import CityWeather from './CityWeather'
import { getCityCurrentWeather } from '../../helpers/apis/weather_api'
import './Home.scss'

class Home extends React.Component {
   constructor () {
    super()
    this.state = {
      citiesList: ["San Francisco, Californie, États-Unis", "Paris, France"],
      citiesWeather: []
    }
  }
  updateCities(city) {
    this.setState({
      citiesList: this.state.citiesList.concat(city)
    })

    this.getCityWeather(city)
  }

  async getCityWeather(city) {
    const weather = await getCityCurrentWeather(city)
    const cityWeatherData = {
      cityName: weather.data.name,
      weatherMain: weather.data.weather[0].main,
      weatherDescription: weather.data.weather[0].description,
      weatherTemp: weather.data.main.temp,
      icon: weather.data.weather[0].icon
    }
    this.setState({
      citiesWeather: this.state.citiesWeather.concat(cityWeatherData)
    })
  }
  componentDidMount() {
    this.state.citiesList.map((element, i) => {
      this.getCityWeather(element)
    })
  }

  render() {
    return (
      <MainContainer pageName="Home">
        <h1>My Cities</h1>
       
        <div id="test-container" className="test-container row">
          {this.state.citiesWeather.map(function(element, i){
            return (
              <CityWeather cityData={element} key={i}/>
            )
          })}

          <div className="test col-xs-12 col-sm-4">
            <div className="innerContainer">
              <FontAwesome name="plus-square-o" className="add-city"/>
              <AddCityContainer containerClass="add-city-form" addCityUpdate={(city) => this.updateCities(city)}/>
            </div>
          </div>
        </div>
      </MainContainer>
    )
  }
}

export default Home