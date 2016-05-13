import React from 'react'
import { WeatherIcon, WeatherCityName, WeatherCityDescription, WeatherForecastList, WeatherSummary, WeatherTemperature } from '../WeatherCity/WeatherElements'
import { Link } from 'react-router'

function CityWeather({cityData}) {
  return (
    <Link to={`/weather-city/?city=${cityData.cityName}`}>
       <li className="city-weather col-xs-12 col-sm-4">
        <div className="inner-container weather-details">
            <WeatherCityName name={cityData.cityName} />
            <WeatherIcon icon={cityData.icon}/>
            <WeatherCityDescription description={cityData.weatherDescription} />
            <WeatherTemperature temperature={cityData.weatherTemp}/>
            <p className="see-forecast">See 5 days forecast</p>
        </div>
      </li>
    </Link>
  )
}
export default CityWeather