import axios from 'axios'

const _baseURL = "http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=1"
const options = "&size=medium&mapfilter=true"
const distance = 0.1

function JSONCallback() {
  console.log('blabla')
}

function prepUrl(queryStringData) {
  return _baseURL + queryStringData + options;
}

function getCityPicture(lat, long) {
  const queryStringData = `&minx=${long - distance}&miny=${lat - distance}&maxx=${long + distance}&maxy=${lat + distance}`
  const url = prepUrl(queryStringData)
  // Using jQuery, no JSONP option with AXIOS
  return $.ajax({
    url: url,
    dataType: "jsonp",
    success: function( response ) {
        return response
    }
  });
}

export async function getCityLastestPicture(lat, long) {
  try {
    return await getCityPicture(lat, long)
  } catch (error) {
    console.warn('Error in getCityLastestPicture: ,', error)
  }
}
