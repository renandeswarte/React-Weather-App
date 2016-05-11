import React from 'react'
import { getDate, convertToCelcius, convertToFarenheit } from '../../helpers/utils'

export function CityBackgroundPicture({cityPicture}) {
  return (
    <div 
      id="city-background" 
      className="city-background" 
      style={{backgroundImage: `url(${cityPicture})`}}>
    </div>
  )
}

export function WeatherIcon({icon}) {
  return (
    <img src={`../assets/weather-icons/${icon}.svg`}/>
  )
}

export function WeatherCityName({name}) {
  return (
    <h1>{name}</h1>
  )
}

export function WeatherCityDescription({description}) {
  return (
    <p className="weather-description">{description}</p>
  )
}

export function WeatherForecastList({forecastList}) {
  return (
    <div className="forecast-container">
      <ul>
        {forecastList.map(function(element, i){
          return (
            <li className='forecast-element' key={i}>
              <WeatherIcon icon={element.weather[0].icon}/>
              <WeatherSummary date={element.dt} description={element.weather[0].description} />
              <WeatherTemperature temperature={element.temp.day}/>
            </li>
          )
        })}
      </ul>
    </div>
)}

export function WeatherSummary({date, description}) {
  return (
    <div className='forecast-summary'>
      <p className='forecast-day'>{getDate(date)}</p>
      <p className='forecast-description'>{description}</p>
    </div>
  )
}

export function WeatherTemperature({temperature}) {
  return (
    <div className="weather-temperature">
      <img src={`../assets/weather-icons/thermo.svg`}/>
      <span>{`${convertToCelcius(temperature)}°C - ${convertToFarenheit(temperature)}°F`}</span>
    </div>
  )
}
