const { Client } = require('pg')
const db = require('./postgresConfig.js')

const config = {
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'campingproject'
}

module.exports = client = new Client(config);

client.connect().then(() => console.log("db connected and good to go"))