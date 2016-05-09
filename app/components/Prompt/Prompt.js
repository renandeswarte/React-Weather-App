import React from 'react'
import FontAwesome from 'react-fontawesome'

class Prompt extends React.Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }
  }
  async onSubmit() {
    const cityInput = document.getElementsByClassName('city-input')
    Object.keys(cityInput).map((key) => {
      if (cityInput[key].value) {
        this.context.router.push({
          pathname: `/weather-city/${cityInput[key].value}`,
          state: {
            city: cityInput[key].value
          }
        })
      }
    })
  }
  componentDidMount() {
    const input = document.getElementsByClassName('city-input')
    Object.keys(input).map(function(key) {
      new google.maps.places.Autocomplete(input[key], {types: ['(cities)']})
    })
  }
  render() {
    return (
      <form onSubmit={() => this.onSubmit()}>
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
