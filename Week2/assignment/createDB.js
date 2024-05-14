const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
});

connection.connect((err) => {
  if (err) throw err;
  connection.query(
    "CREATE DATABASE IF NOT EXISTS authors_papers;",
    (err, result) => {
      if (err) throw err;
      console.log("database created", result);

      connection.end();
    }
  );
});
