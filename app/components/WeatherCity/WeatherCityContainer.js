import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import { getCityCurrentWeather } from '../../helpers/apis/weather_api'

class WeatherCityContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      cityName: '',
      weather: ''
    }
  }

  async componentDidMount() {
    try {
      const weather = await getCityCurrentWeather(this.props.location.state.city)
      this.setState({
        cityName: weather.data.name,
        weather: weather.data.weather[0].main 
      })
    } catch (error) {
      console.warn('Error in ResultsContainer')
    }
  }

  async componentWillReceiveProps(newProps) {
    try {
      const weather = await getCityCurrentWeather(newProps.location.state.city)
      this.setState({
        cityName: weather.data.name,
        weather: weather.data.weather[0].main 
      })
    } catch (error) {
      console.warn('Error in ResultsContainer')
    }
  }

  render() {
    return (
      <MainContainer pageName="weatherCityPage">
        <h1>Page</h1>
        {this.state.cityName}
        {this.state.weather}
        <Link to='/'>
          <button className="btn btn-lg">
            Link to Home
          </button>
        </Link>
      </MainContainer>
    )
  }
}

export default WeatherCityContainer