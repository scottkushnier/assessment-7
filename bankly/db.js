/** Database setup for jobly. */

const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(DB_URI);

client.connect();
client.password = "postgres"; // SDK

module.exports = client;
