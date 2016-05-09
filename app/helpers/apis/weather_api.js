import axios from 'axios'

const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const _APIKEY = 'cc91ca56db74062096acaab6ee245f82'

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl(type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getCityWeather(city) {
  const queryStringData = getQueryStringData(city)
  const url = prepUrl('weather', queryStringData)
  return axios.get(url);
}

export async function getCityCurrentWeather(city) {
  try {
    return await getCityWeather(city)
  } catch (error) {
    console.warn('Error in getCurrentWeather: ,', error)
  }
}