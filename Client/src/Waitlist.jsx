import React from 'react'

class Waitlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

    render() {
      return (
        <div>
          <h2 className="heading">Sign up to get notified of available camping spots</h2>
          <form className="form">
            <input placeholder="first name" type="text"></input>
            <input placeholder="last name" type="text"></input>
            <input placeholder="email" type="text"></input>
            <input placeholder="phone number" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
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

export default Waitlist