import React from 'react'
import Waitlist from './Waitlist.jsx'
import Reservations from './Reservations.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showWaitlist: false,
      showReservation: false

    };
    this.showWaitlistForm = this.showWaitlistForm.bind(this);
    this.showReservationForm = this.showReservationForm.bind(this)


  }

  showWaitlistForm() {
    this.setState({showWaitlist: true, showReservation: false})

  };

  showReservationForm() {
    this.setState({showReservation: true, showWaitlist: false})

  }

  render() {
    const { showWaitlist, showReservation } = this.state;
    return (
      <div className="container">
        {showWaitlist ? <Waitlist /> : <button id="waitlistButton" onClick={this.showWaitlistForm}>Get On The Waitlist</button>}
        {showReservation ? <Reservations /> : <button id="reservationButton" onClick={this.showReservationForm}>Put a Spot up For Grabs</button>  }
      </div>
    )
  }
}

export default App