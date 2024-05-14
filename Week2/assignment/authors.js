const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
  database: "authors_papers",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL database");

  connection.query("DROP TABLE IF EXISTS authors;");

  const createTable =
    "CREATE TABLE authors (author_id INT PRIMARY KEY AUTO_INCREMENT, author_name VARCHAR(50) NOT NULL, university VARCHAR(200), date_of_birth DATE NOT NULL, h_index INT, gender VARCHAR(1), mentor VARCHAR(50));";

  const addColumn =
    "ALTER TABLE authors ADD COLUMN mentor_id INT, ADD CONSTRAINT fk_mentor_id FOREIGN KEY (mentor_id) REFERENCES authors(author_id)";

  connection.query(createTable, function (err, results, fields) {
    if (err) throw err;

    connection.query(addColumn, function (err, results, fields) {
      if (err) throw err;
      console.log("table created");
      connection.end();
    });
  });
});
