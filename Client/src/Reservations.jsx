import React from 'react'
import axios from 'axios'

class Reservations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSite: null

    }
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleSelectedSite = this.handleSelectedSite.bind(this);
  }

  handleCancelSubmit(event) {
    let first = event.target.first.value;
    let last = event.target.last.value;
    let email = event.target.email.value;
    let number = event.target.number.value;
    let start = event.target.startDate.value;
    let end = event.target.endDate.value;
    let site = this.state.selectedSite;

    const options = {
      method: 'post',
      url: '/reservations',
      data: {
        first: first,
        last: last,
        email: email,
        number: number,
        start: start,
        end: end,
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

  handleSelectedSite(event) {
    this.setState({selectedSite: event.target.value})

  }

    render() {
      return (
        <div>
          <h2 className="heading">Submit a reservation to cancel</h2>
          <form className="form" onSubmit={this.handleCancelSubmit}>
            <input name="first" placeholder="first name" type="text"></input>
            <input name="last" placeholder="last name" type="text"></input>
            <input name="email" placeholder="email" type="text"></input>
            <input name="number" placeholder="phone number" type="text"></input>
            <input name ="startDate" type="date"></input>
            <input name = "endDate" type="date"></input>
            <select onChange={this.handleSelectedSite}>
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