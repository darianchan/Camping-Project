import React from 'react'

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
  }

  handleCancelSubmit(e) {
    e.preventDefault()
    debugger;
  }

    render() {
      return (
        <div>
          <h2 className="heading">Sign up to get notified of available camping spots</h2>
          <form className="form" onSubmit={this.handleCancelSubmit}>
            <input placeholder="first name" type="text"></input>
            <input placeholder="last name" type="text"></input>
            <input placeholder="email" type="text"></input>
            <input name="number" placeholder="phone number" type="text"></input>
            <input name ="startDate" type="date"></input>
            <input name = "endDate" type="date"></input>
            <select>
              <option>Choose a Camping Site</option>
              <option>Grand Canyon</option>
              <option>Joshua Tree</option>
              <option>Yosemite</option>
              <option>Zion</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    }

}

export default Reservations