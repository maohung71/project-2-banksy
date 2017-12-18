/**
 * @module dbConfig
 * @desc this file contains all the connection strings
 * to connect to the database server
 */

// Our database is either at some URL,
// or configured at some host:port
// TODO: [1] Export your database config
const options = {
  query: (e) => {
    console.log(e.query);
  }
};
const pgp      = require('pg-promise')(options);


let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'banksy_db_dev',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;
