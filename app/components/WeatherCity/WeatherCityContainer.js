import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import { getCityCurrentWeather } from '../../helpers/apis/weather_api'
import { getCityLastestPicture } from '../../helpers/apis/panoramio_api'

class WeatherCityContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      cityName: '',
      weather: '',
      icon: '',
      cityPicture: ''
    }
  }

  async getPictures(latitude, longitude) {
    const pictures = await getCityLastestPicture(latitude, longitude)
    this.setState({
        cityPicture: pictures.photos[0].photo_file_url
      })
  }

  async componentDidMount() {
    const { query } = this.props.location
    let latitude
    let longitude
    try {
      const weather = await getCityCurrentWeather(query.city)
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': query.city}, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat()
            longitude  = results[0].geometry.location.lng()
            this.getPictures(latitude, longitude)
          }
      })
      this.setState({
        cityName: weather.data.name,
        weather: weather.data.weather[0].main,
        icon: weather.data.weather[0].icon
      })
    } catch (error) {
      console.warn('Error in WeatherCityContainer')
    }
  }

  async componentWillReceiveProps(newProps) {
    const { query } = newProps.location
    let latitude
    let longitude
    try {
      const weather = await getCityCurrentWeather(query.city)
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': query.city}, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            latitude = results[0].geometry.location.lat()
            longitude  = results[0].geometry.location.lng()
            this.getPictures(latitude, longitude)
          }
      })
      this.setState({
        cityName: weather.data.name,
        weather: weather.data.weather[0].main,
        icon: weather.data.weather[0].icon
      })
    } catch (error) {
      console.warn('Error in WeatherCityContainer')
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
        <div>{!!this.state.cityPicture && <img src={this.state.cityPicture}/>}</div>   
      </MainContainer>
    )
  }
}

export default WeatherCityContainer