-- \c banksy_db_dev;

DROP TABLE IF EXISTS banksy;
CREATE TABLE IF NOT EXISTS banksy (
  id SERIAL PRIMARY KEY,
  title TEXT,
  location VARCHAR(255),
  day VARCHAR(255),
  description TEXT,
  photo TEXT

);
