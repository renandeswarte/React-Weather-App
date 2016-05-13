import React from 'react'
import MainContainer from '../Main/MainContainer'
import CitySeachContainer from '../CitySeach/CitySeachContainer'
import AddCityContainer from '../AddCity/AddCityContainer'
import FontAwesome from 'react-fontawesome'
import { fullHeightContainer } from '../../helpers/utils'
import CityWeather from './CityWeather'
import { getCityCurrentWeather } from '../../helpers/apis/weather_api'
import './Home.scss'

class Home extends React.Component {
   constructor () {
    super()
    this.state = {
      citiesList: ["San Francisco, Californie, États-Unis"],
      citiesWeather: []
    }
  }
  updateCities(city) {
    this.setState({
      citiesList: this.state.citiesList.concat(city)
    })

    this.getCityWeather(city)
    const cityForm = document.getElementById('city-weather-element')
    cityForm.classList.remove('form-displayed')
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
    // Setting component style height
    fullHeightContainer('home')

    this.state.citiesList.map((element, i) => {
      this.getCityWeather(element)
    })
  }
  showAddCityForm() {
    const cityForm = document.getElementById('city-weather-element')
    cityForm.classList.add('form-displayed')
  }

  render() {
    return (
      <MainContainer pageName="home">
        <h1>My Cities</h1>
       
        <div id="cities-container" className="row">
          <ul>
            {this.state.citiesWeather.map(function(element, i){
              return (
                <CityWeather cityData={element} key={i}/>
              )
            })}
            <li id="city-weather-element" className="city-weather col-xs-12 col-sm-4 add-city-block">
              <div className="inner-container">
                <FontAwesome name="plus-square-o" className="add-city" onClick={this.showAddCityForm}/>
                <AddCityContainer containerClass="add-city-form" addCityUpdate={(city) => this.updateCities(city)}/>
              </div>
            </li>
          </ul>
        </div>
      </MainContainer>
    )
  }
}

export default Home