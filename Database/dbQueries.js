const db = require('./postgresConfig.js')

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = require('../config.js')

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// this code below will send the text message
// client.messages
//   .create({
//      body: 'yo',
//      from: '+14159910321',
//      to: '+15105993143'
//    })
//   .then(message => console.log(message.sid));

// write function to query first person in the database

const addToWaitlist = function (req, res) {
  let first = req.body.first
  let last = req.body.last
  let email = req.body.email
  let number = req.body.number
  let site = req.body.site
  console.log(site)

  let query = `INSERT INTO waitlist (firstname, lastname, email, phonenumber, campsite) VALUES ('${first}', '${last}', '${email}', '${number}', '${site}')`

  db.query(query)
  .then((response) => {
    res.send('all good')
    console.log("inserted good")
  })
  .catch((error) => {
    res.send('error')
    console.log(error)
  })
}

const alertCanceledReservation = function (req, res) {
  let first = req.body.first
  let last = req.body.last
  let email = req.body.email
  let number = req.body.number
  let start = req.body.start
  let end = req.body.end
  let site = req.body.site

  let query = `select * from waitlist limit 1`

  db.query(query)
  .then((data) => {
    let info = data.rows[0]
    client.messages
      .create({
         body: `${first} ${last} canceled a reservation at ${site} for the dates: ${start} to ${end}`,
         from: '+14159910321',
         to: '+17146565070'
       })
  .then(message => console.log(message.sid));
    res.send()
  })
  .catch((error) => {
    console.log(error)
    res.send(error)
  })

}

module.exports = {
  addToWaitlist,
  alertCanceledReservation
}