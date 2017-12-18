
// TODO: [1] require pg-promise, and execute it like a function.
// TODO: [2] require our DB config
const db = require ('../db/dbConfig')
const Banksy = {};

// execute pgp with our db config, so a connection is made.

// @see https://github.com/vitaly-t/pg-promise#query-result-mask

//
Banksy.findAll = () => {
  return db.query('SELECT * FROM banksy');
}

Banksy.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM banksy
    WHERE id = $1
  `, [id]);
}

Banksy.destroy = (id) => {
  return db.none(`
    DELETE FROM banksy
    WHERE id = $1
  `, [id]);
}

Banksy.create = (banksy) => {
  return db.one(
    `
    INSERT INTO banksy
    (title, location, day, description, photo)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [banksy.title, banksy.location, banksy.day, banksy.description, banksy.photo]);
}

Banksy.update = (banksy, id) => {
  return db.one(
    `
    UPDATE banksy SET
    title = $1,
    location = $2,
    day = $3,
    description = $4,
    photo = $5
    WHERE id = $6
    RETURNING *
  `, [banksy.title, banksy.location, banksy.day, banksy.description, banksy.photo, id]);
}

module.exports = Banksy;
