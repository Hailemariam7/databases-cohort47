const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
  database: "authors_papers",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected to MySQL");

  connection.query("DROP TABLE IF EXISTS research_Papers;");

  const createTable =
    "CREATE TABLE research_Papers(paper_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, paper_title VARCHAR(255) NOT NULL, conference VARCHAR(255), publish_date DATE);";

  connection.query(createTable, (err) => {
    if (err) throw err;
    console.log("table created.");
    connection.end();
  });
});
