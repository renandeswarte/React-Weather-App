const daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
}

export function getDate(unixTimestmap) {
  const date = new Date(unixTimestmap * 1000);
  return daysMap[date.getDay()]
}

export function convertToCelcius(kelvin) {
  return Math.round(kelvin - 273.15, 0)
}

export function convertToFarenheit(kelvin) {
  return Math.round(kelvin * (9/5) - 459.67, 0)
}

export function fullHeightContainer(pageName) {
  const header = document.getElementsByClassName('header-container')
  const headerHeight = header[0].clientHeight;
  const page = document.getElementsByClassName(pageName)
  page[0].style.minHeight = window.innerHeight - headerHeight + 'px'
}