import React from 'react'
import { WeatherIcon, WeatherCityName, WeatherCityDescription, WeatherForecastList, WeatherSummary, WeatherTemperature } from '../WeatherCity/WeatherElements'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'

class CityWeather extends React.Component {
  removeCity(event, city) {
    // Remove city element from the DOM
    event.persist()
    event.target.parentNode.classList.add('removed')
    setTimeout(function() {
        event.target.parentNode.classList.add('hide')
    }, 500);
    this.props.removeCity(city)
  }
  render() {
    return (
      <li className="city-weather col-xs-12 col-sm-4">
        <FontAwesome 
          name="trash" 
          className="remove-city" 
          onClick={(event) => this.removeCity(event, this.props.cityData.cityFullName)}
        />

        <div className="inner-container weather-details">
          <WeatherCityName name={this.props.cityData.cityName} />
          <WeatherIcon icon={this.props.cityData.icon}/>
          <WeatherCityDescription description={this.props.cityData.weatherDescription} />
          <WeatherTemperature temperature={this.props.cityData.weatherTemp}/>
          <Link to={`/weather-city/?city=${this.props.cityData.cityName}`} className="see-forecast">
            See 5 days forecast
          </Link>
        </div>
      </li>
    )
  }
}

export default CityWeather