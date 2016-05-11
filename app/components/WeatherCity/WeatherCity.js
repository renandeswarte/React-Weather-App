import React from 'react'
import { getDate, convertToCelcius, convertToFarenheit } from '../../helpers/utils'


function WeatherCity(props) {
  return (
 
    <div className={`${props.displayClass} weather-details`}>
      <h1>{props.cityName}</h1>
      <div>{!!props.icon && <img src={`../assets/weather-icons/${props.icon}.svg`}/>}</div>
      <p className="weather-description">{props.weatherDescription}</p>
      <div className="weather-temperature">
        <img src={`../assets/weather-icons/thermo.svg`}/>
        <span>{props.cityCelcius} - {props.cityFarenheit}</span>
      </div>
      <div className="forecast-container">
        <ul>
          {props.forecast.map(function(element, i){
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
  )
}

export default WeatherCity