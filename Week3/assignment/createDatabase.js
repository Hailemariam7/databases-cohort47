const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL.");

  connection.query(
    "CREATE DATABASE IF NOT EXISTS transaction",
    (err, result) => {
      if (err) throw err;
      console.log("Database created or already exists.");
      connection.end();
    }
  );
});
