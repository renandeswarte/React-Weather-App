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
      citiesList: [],
      citiesWeather: []
    }
  }
  updateCities(city) {
    let myCities = this.state.citiesList.concat(city)
    localStorage.setItem('citiesList', JSON.stringify(myCities))

    this.setState({
      citiesList: myCities
    })

    this.getCityWeather(city)
    const cityForm = document.getElementById('city-weather-element')
    cityForm.classList.remove('form-displayed')
  }

  showAddCityForm() {
    const cityForm = document.getElementById('city-weather-element')
    cityForm.classList.add('form-displayed')
  }

  removeCity(city) {
    const myCities = JSON.parse(localStorage.getItem('citiesList'))
    var elementIndex = myCities.indexOf(city)
    myCities.splice(elementIndex, 1)
    localStorage.setItem('citiesList', JSON.stringify(myCities))
  }

  async getCityWeather(city) {
    const weather = await getCityCurrentWeather(city)
    const cityWeatherData = {
      cityFullName: city,
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

    const myCities = JSON.parse(localStorage.getItem('citiesList'))
    if (myCities) {
      myCities.map((element, i) => {
        this.getCityWeather(element)
      })
      this.setState({
        citiesList: this.state.citiesList.concat(myCities)
      })
    }
  }

  render() {
    return (
      <MainContainer pageName="home">
        <h1>My Cities</h1>
        <div id="cities-container" className="row">
          <ul>
            {this.state.citiesWeather.map(function(element, i){
              return (
                <CityWeather cityData={element} key={i} removeCity={(city) => this.removeCity(city)}/>
              )
            }.bind(this))}
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