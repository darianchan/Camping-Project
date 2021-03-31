const db = require('./postgresConfig.js')

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = require('../config.js')

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// const MessagingResponse = require('twilio').twiml.MessagingResponse;


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
  // const twiml = new MessagingResponse();
  // twiml.message('yoooooo')
  // res.writeHead(200, {'Content-Type': 'text/xml'});
  // res.end(twiml.toString())

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
         to: '+13027430130'
       })
  .then(message => console.log(message.sid))
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