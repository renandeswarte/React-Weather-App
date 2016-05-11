import React from 'react'
import { getDate, convertToCelcius, convertToFarenheit } from '../../helpers/utils'
import { WeatherIcon, WeatherCityName, WeatherCityDescription, WeatherForecastList, WeatherSummary, WeatherTemperature } from './WeatherElements'
import Loading from '../Loading/Loading'

function WeatherCity(props) {
  return (
    props.isLoading === true
    ? <Loading />
    : <div className={`${props.displayClass} weather-details`}>
        <WeatherCityName name={props.cityName} />
        <WeatherIcon icon={props.icon}/>
        <WeatherCityDescription description={props.weatherDescription} />
        <WeatherTemperature temperature={props.weatherTemp}/>
        <WeatherForecastList forecastList={props.forecast} />
    </div>
  )
}

export default WeatherCity