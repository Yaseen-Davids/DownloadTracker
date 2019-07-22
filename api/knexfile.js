// UPDATE THIS WITH .env
const username = 'admin',
  password = 'admin',
  port = '5432',
  db = 'todownload';

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${username}:${password}@localhost:${port}/${db}`,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds/production',
    },
  }
}