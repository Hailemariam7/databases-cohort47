// Update with your config settings.

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "hyfuser",
      password: "MySQLpassword",
      database: "db_qa_session",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
  },
};
