import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import { getCityCurrentWeather } from '../../helpers/apis/weather_api'

class WeatherCityContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      cityName: '',
      weather: '',
      icon: '',
      latitude: 0,
      longitude: 0,
      cityPicture: ''
    }
  }

  async componentDidMount() {
    console.log(this.props.location.state);
    try {
      const weather = await getCityCurrentWeather(this.props.location.state.city)
      console.log(weather.data);
      this.setState({
        cityName: weather.data.name,
        weather: weather.data.weather[0].main,
        icon: weather.data.weather[0].icon,
        latitude: weather.data.weather[0].latitude,
        longitude: weather.data.weather[0].longitude
      })
    } catch (error) {
      console.warn('Error in ResultsContainer')
    }
  }

  async componentWillReceiveProps(newProps) {
    console.log(newProps.location.state);
    try {
      const weather = await getCityCurrentWeather(newProps.location.state.city)
      this.setState({
        cityName: weather.data.name,
        weather: weather.data.weather[0].main,
        icon: weather.data.weather[0].icon
      })
    } catch (error) {
      console.warn('Error in ResultsContainer')
    }
  }

  render() {
    return (
      <MainContainer pageName="weatherCityPage">
        <Link to='/'>
          <button className="btn btn-lg">
            Link to Home
          </button>
        </Link>
        <h1>{this.state.cityName}</h1>
        <p>{this.state.weather}</p>
        <div>{!!this.state.icon && <img src={`../assets/weather-icons/${this.state.icon}.svg`}/>}</div>    
      </MainContainer>
    )
  }
}

export default WeatherCityContainer