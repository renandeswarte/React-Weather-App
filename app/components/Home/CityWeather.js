import React from 'react'
import { WeatherIcon, WeatherCityName, WeatherCityDescription, WeatherForecastList, WeatherSummary, WeatherTemperature } from '../WeatherCity/WeatherElements'


function CityWeather({cityData}) {
  return (
   <li className="test col-xs-12 col-sm-4">
    <div className="inner-container weather-details">
        <WeatherCityName name={cityData.cityName} />
        <WeatherIcon icon={cityData.icon}/>
        <WeatherCityDescription description={cityData.weatherDescription} />
        <WeatherTemperature temperature={cityData.weatherTemp}/>
    </div>
  </li>

  )
}
export default CityWeather