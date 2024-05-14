const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "MySQLpassword",
  database: "authors_papers",
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }

  console.log("Connected to MySQL database");

  // Query to print names of all authors and their corresponding mentors
  const query1 = `
    SELECT a.author_name, mentor
    FROM authors AS a
  `;

  // Query to print all columns of authors and their published paper_title
  const query2 = `
    SELECT a.author_name, p.paper_title
    FROM authors AS a
    LEFT JOIN author_paper_relationship AS apr ON a.author_id = apr.author_id
    LEFT JOIN research_papers AS p ON apr.paper_id = p.paper_id;
  `;

  connection.query(query1, function (err, results, fields) {
    if (err) {
      console.error("Error executing query 1:", err);
      return;
    }
    console.log("Query 1 Results:");
    console.table(results);
  });

  connection.query(query2, function (err, results, fields) {
    if (err) {
      console.error("Error executing query 2:", err);
      return;
    }
    console.log("Query 2 Results:");
    console.table(results);
  });

  connection.end();
});
