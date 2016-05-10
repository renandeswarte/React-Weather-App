import React from 'react'
import FontAwesome from 'react-fontawesome'

class Prompt extends React.Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }
  }
  async onSubmit(event) {
    event.preventDefault()
    const cityInput = document.getElementsByClassName('city-input')
    Object.keys(cityInput).map((key) => {
      if (cityInput[key].value) {
        this.context.router.push({
          pathname: `/weather-city/`,
          query: {
            city: cityInput[key].value
          }
        })
      }
    })
    document.getElementById("cityForm").reset()
  }
  
  componentDidMount() {
    const input = document.getElementsByClassName('city-input')
    Object.keys(input).map(function(key) {
      new google.maps.places.Autocomplete(input[key], {types: ['(cities)']})
    })
  }

  render() {
    return (
      <form id="cityForm" onSubmit={(event) => this.onSubmit(event)}>
        <div class="form-group">
          <input
            type="text"
            className="form-control city-input"
            placeholder={"Enter a city name"} required
          />
          <button type="submit" className="btn btn-success">
            <FontAwesome name='search' />
          </button>
        </div>
      </form>
    )
  }
}

Prompt.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Prompt
