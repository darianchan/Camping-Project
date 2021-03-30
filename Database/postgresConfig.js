const { Client } = require('pg')

const config = {
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'campingProject'
}

module.exports = client = new Client(config);

client.connect().then(() => console.log("db connected and good to go"))