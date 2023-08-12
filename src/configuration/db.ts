import knex from 'knex';

// TODO: Extract these as environment variables.

const dbConfig = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'example',
    database: 'postgres',
  },
  pool: {
    min: 2,
    max: 10,
  },
};

const db = knex(dbConfig);

export default db;
