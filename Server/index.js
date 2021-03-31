const express = require('express')
const app = express()
const port = 3000
const dbQueries = require('../Database/dbQueries.js')
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const ngrok = require('ngrok');
(async function() {
  const url = await ngrok.connect(3000);
  console.log(url)
})();

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post('/waitlist', dbQueries.addToWaitlist)

app.post('/reservations', dbQueries.alertCanceledReservation)

app.post('/sms', (req, res) => {
  // req.body.Body is the message response
  const twiml = new MessagingResponse();
  twiml.message('Have a great trip! 🧘🏿‍♂️')
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString())
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})

