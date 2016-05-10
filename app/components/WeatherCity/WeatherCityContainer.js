import React from 'react'
import { Link } from 'react-router'
import MainContainer from '../Main/MainContainer'
import { getCityCurrentWeather, getForecastWeather } from '../../helpers/apis/weather_api'
import { getCityLastestPicture } from '../../helpers/apis/panoramio_api'
import { getDate, convertToCelcius, convertToFarenheit } from '../../helpers/utils'
import defaultBg from '../../../assets/pictures/default-weather-bg.jpg'
import FontAwesome from 'react-fontawesome'
import './Weather.scss'

class WeatherCityContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      cityName: '',
      weatherMain: '',
      weatherDescription: '',
      temperatureCelcius: '',
      temperatureFarenheit: '',
      forecast: [],
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
     document.getElementById('city-background').classList.remove("transition")
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
        temperatureCelcius: convertToCelcius(weather.data.main.temp) + "°C",
        temperatureFarenheit: convertToFarenheit(weather.data.main.temp) + "°F",
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
    document.getElementById('city-background').classList.add("transition")
    // Getting weather and picture info
    this.getPictureAndWeather(newProps.location)
  }

  render() {
    const divStyle = {
      backgroundImage: 'url(' + this.state.cityPicture + ')'
    }
    return (
      <MainContainer pageName="weatherCityPage">
        <div id="city-background" className="city-background" style={divStyle}></div>
        <Link to='/'>
          <button className="home-link">
             <FontAwesome name='chevron-left' />
          </button>
        </Link>
        <div className="weather-details col-xs-12 col-sm-6 col-sm-offset-3">
          <h1>{this.state.cityName}</h1>
          <div>{!!this.state.icon && <img src={`../assets/weather-icons/${this.state.icon}.svg`}/>}</div>
          <p className="weather-description">{this.state.weatherDescription}</p>
          <div className="weather-temperature">
            <img src={`../assets/weather-icons/thermo.svg`}/>
            <span>{this.state.temperatureCelcius} - {this.state.temperatureFarenheit}</span>
          </div>
          <div className="forecast-container">
            <ul>
              {this.state.forecast.map(function(element, i){
                return (
                  <li className='forecast-element' key={i}>
                    <img src={`../assets/weather-icons/${element.weather[0].icon}.svg`}/>
                    <div className='forecast-summary'>
                      <p className='forecast-day'>{getDate(element.dt)}</p>
                      <p className='forecast-description'>{element.weather[0].description}</p>
                    </div>
                    <div className="weather-temperature forecast-temperature">
                      <img src={`../assets/weather-icons/thermo.svg`}/>
                      <span>{`${convertToCelcius(element.temp.day)}°C - ${convertToFarenheit(element.temp.day)}°F`}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div> 
      </MainContainer>
    )
  }
}

export default WeatherCityContainer