const express = require('express')
const app = express()
const port = 3000
const dbQueries = require('../Database/dbQueries.js')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post('/waitlist', dbQueries.addToWaitlist)

app.post('/reservations', dbQueries.alertCanceledReservation)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})


// const http = require('http');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message("Thank you! You're reservation is now confirmed");

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
//   console.log(twiml)
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });