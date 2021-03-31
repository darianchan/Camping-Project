import React from 'react'
import axios from 'axios'

class Waitlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      siteSelected: null

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSiteSelection = this.handleSiteSelection.bind(this)
  }

  handleSubmit(event) {
    let first = event.target.first.value;
    let last = event.target.last.value;
    let email = event.target.email.value;
    let number = event.target.number.value;
    let site = this.state.siteSelected;

    const options = {
      method: 'post',
      url: '/waitlist',
      data: {
        first: first,
        last: last,
        email: email,
        number: number,
        site: site
      },
    };

    // send the request
    axios(options)
    .then((response)=> {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleSiteSelection(event) {
    this.setState({siteSelected: event.target.value})

  }

    render() {
      return (
        <div>
          <h2 className="heading">Get a spot on the waitlist</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input name="first" placeholder="first name" type="text"></input>
            <input name="last" placeholder="last name" type="text"></input>
            <input name="email" placeholder="email" type="text"></input>
            <input name="number" placeholder="phone number" type="tel" required></input>
            <select onChange={this.handleSiteSelection}>
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