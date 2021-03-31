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
        <h1 id="title">PLEASE SELECT AN OPTION BELOW</h1>
        {showWaitlist ? <Waitlist /> : <button id="waitlistButton" className="raise" onClick={this.showWaitlistForm}>GET ON THE WAITLIST</button>}
        {showReservation ? <Reservations /> : <button id="reservationButton" onClick={this.showReservationForm}>PUT A SPOT UP FOR GRABS</button>  }
      </div>
    )
  }
}

export default App