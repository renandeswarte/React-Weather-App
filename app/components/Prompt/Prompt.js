import React from 'react'

class Prompt extends React.Component {
  constructor() {
    super()
    this.state = {
      city: ''
    }
  }
  onSubmit() {
    const cityInput = document.getElementById('city-input')
    this.setState({
      city: cityInput.value
    })
  }
  onUpdateCity(event) {
    this.setState({
      city: event.target.value
    })
  }
  componentDidMount() {
    const input = document.getElementById('city-input')
    new google.maps.places.Autocomplete(input, {types: ['(cities)']})
  }
  render() {
    return (
      <form onSubmit={() => this.onSubmit()}>
        <div class="form-group">
          <input
            id="city-input"
            onChange={(event) => this.onUpdateCity(event)}
            type="text"
            className="form-control"
            placeholder={"Enter a city name"} required
          />
          <button type="submit" className="btn btn-default">Submit</button>
        </div>
      </form>
    )
  }
}

export default Prompt