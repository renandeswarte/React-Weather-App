import React from 'react'
import FontAwesome from 'react-fontawesome'

class CitySeach extends React.Component {
  onSubmit(event) {
    event.preventDefault()
    const cityInput = document.getElementById('citySearch')
    this.context.router.push({
      pathname: `/weather-city/`,
      query: {
        city: cityInput.value
      }
    })
    document.getElementById("cityForm").reset()
  }
  
  componentDidMount() {
    const input = document.getElementById('citySearch')
    new google.maps.places.Autocomplete(input, {types: ['(cities)']})
  }

  render() {
    return (
      <form id="cityForm" onSubmit={(event) => this.onSubmit(event)}>
        <div class="form-group">
          <input
            id="citySearch"
            type="text"
            className="form-control city-input"
            placeholder="Enter a city name" required
          />
          <button type="submit" className="btn btn-success">
            <FontAwesome name='search' />
          </button>
        </div>
      </form>
    )
  }
}

CitySeach.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CitySeach
