import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import { getCityCurrentWeather } from '../../helpers/apis/weather_api'
import { getCityLastestPicture } from '../../helpers/apis/panoramio_api'
import defaultBg from '../../../assets/pictures/default-weather-bg.jpg'
import './Weather.scss'

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
    if (pictures.photos.length !== 0) {
      this.setState({
        cityPicture: pictures.photos[0].photo_file_url
      })
    } else {
      this.setState({
        cityPicture: defaultBg
      })
    }
  }

  async getPictureAndWeather(props) {
    const { query } = props
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

  componentDidMount() {
    // Setting component style height
    const header = document.getElementsByClassName('header-container')
    const headerHeight = header[0].clientHeight;
    const page = document.getElementsByClassName('weatherCityPage')
    page[0].style.minHeight = window.innerHeight - headerHeight + 'px'

    // Getting weather and picture info
    this.getPictureAndWeather(this.props.location)
  }

  componentWillReceiveProps(newProps) {
    // Getting weather and picture info
    this.getPictureAndWeather(newProps.location)
  }

  render() {
    var divStyle = {
      backgroundImage: 'url(' + this.state.cityPicture + ')'
    }
    return (
      <MainContainer pageName="weatherCityPage">
        <div className="city-background" style={divStyle}></div>
        <Link to='/'>
          <button className="btn btn-lg">
            Link to Home
          </button>
        </Link>
        <div className="weather-details">
          <h1>{this.state.cityName}</h1>
          <div>{!!this.state.icon && <img src={`../assets/weather-icons/${this.state.icon}.svg`}/>}</div>
          <p className="weather-name">{this.state.weather}</p>
        </div> 
      </MainContainer>
    )
  }
}

export default WeatherCityContainer