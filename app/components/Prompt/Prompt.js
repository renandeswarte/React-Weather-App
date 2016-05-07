import React from 'react'

class Prompt extends React.Component {
  onSubmit() {
    console.log('form sent');
  }
  render() {
      return (
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <input type="text" className="form-control" placeholder="Enter a city name" required />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      )
  }
}

export default Prompt