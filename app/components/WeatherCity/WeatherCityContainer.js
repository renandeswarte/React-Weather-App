import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import { getCityCurrentWeather, getForecastWeather } from '../../helpers/apis/weather_api'
import { getCityLastestPicture } from '../../helpers/apis/panoramio_api'
import { fullHeightContainer } from '../../helpers/utils'
import defaultBg from '../../../assets/pictures/app-background.jpg'
import FontAwesome from 'react-fontawesome'
import WeatherCity from './WeatherCity'
import { CityBackgroundPicture } from './WeatherElements'
import './Weather.scss'

class WeatherCityContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      cityName: '',
      weatherMain: '',
      weatherDescription: '',
      weatherTemp: 0,
      forecast: [],
      icon: '',
      cityPicture: defaultBg,
      isLoading: true
    }
  }

  async getPictures(latitude, longitude) {
    const pictures = await getCityLastestPicture(latitude, longitude)

    this.setState({
      cityPicture: pictures.photos.length !== 0 
      ? pictures.photos[0].photo_file_url
      : defaultBg
    })

     document.getElementById('city-background').classList.remove('transition')
  }

  async getPictureAndWeather(props) {
    const { query } = props
    let latitude
    let longitude
    try {
      const weather = await getCityCurrentWeather(query.city);
      const forecast = await getForecastWeather(query.city);

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
        weatherMain: weather.data.weather[0].main,
        weatherDescription: weather.data.weather[0].description,
        forecast: forecast.data.list,
        weatherTemp: weather.data.main.temp,
        icon: weather.data.weather[0].icon,
        isLoading: false
      })
    } catch (error) {
      console.warn('Error in WeatherCityContainer')
    }
  }

  componentDidMount() {
    // Setting component style height
    fullHeightContainer('weatherCityPage')

    // Getting weather and picture info
    this.getPictureAndWeather(this.props.location)
  }

  componentWillReceiveProps(newProps) {
    document.getElementById('city-background').classList.add('transition')
    // Getting weather and picture info
    this.getPictureAndWeather(newProps.location)
  }

  render() {
    return (
      <MainContainer pageName="weatherCityPage">
        <CityBackgroundPicture cityPicture={this.state.cityPicture} />
        <Link to='/'>
          <button className="home-link">
             <FontAwesome name='chevron-left' />
          </button>
        </Link>
        <WeatherCity 
          displayClass="col-xs-12 col-sm-6 col-sm-offset-3"
          cityName={this.state.cityName}
          weatherDescription={this.state.weatherDescription}
          icon={this.state.icon}
          weatherTemp={this.state.weatherTemp}
          forecast={this.state.forecast}
          isLoading={this.state.isLoading}
        />
      </MainContainer>
    )
  }
}

export default WeatherCityContainer