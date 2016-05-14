import React from 'react'
import FontAwesome from 'react-fontawesome'

class AddCity extends React.Component {
  onSubmit(event) {
    console.log(this)
    event.preventDefault()
    const cityInput = document.getElementById('cityAdd')
    this.props.addCityUpdate(cityInput.value)
    document.getElementById("addCityForm").reset()
  }
  
  componentDidMount() {
    const input = document.getElementById('cityAdd')
    new google.maps.places.Autocomplete(input, {types: ['(cities)']})
  }

  render() {
    return (
      <form id="addCityForm" onSubmit={(event) => this.onSubmit(event)}>
        <div class="form-group">
          <input
            id="cityAdd"
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

AddCity.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default AddCity
