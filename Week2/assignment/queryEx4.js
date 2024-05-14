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

  // All research papers and the number of authors that wrote that paper
  const query1 = `
    SELECT p.paper_title, COUNT(apr.author_id) AS num_authors
    FROM research_papers AS p
    LEFT JOIN author_paper_relationship AS apr ON p.paper_id = apr.paper_id
    GROUP BY p.paper_id;
  `;

  // Sum of the research papers published by all female authors
  const query2 = `
    SELECT SUM(p.paper_id) AS total_papers
    FROM research_papers AS p
    JOIN author_paper_relationship AS apr ON p.paper_id = apr.paper_id
    JOIN authors AS a ON apr.author_id = a.author_id
    WHERE a.gender = 'F';
  `;

  // Average of the h-index of all authors per university
  const query3 = `
    SELECT AVG(a.h_index) AS avg_h_index, a.university
    FROM authors AS a
    GROUP BY a.university;
  `;

  // Sum of the research papers of the authors per university
  const query4 = `
    SELECT a.university, SUM(p.paper_id) AS total_papers
    FROM authors AS a
    JOIN author_paper_relationship AS apr ON a.author_id = apr.author_id
    JOIN research_papers AS p ON apr.paper_id = p.paper_id
    GROUP BY a.university;
  `;

  // Minimum and maximum of the h-index of all authors per university
  const query5 = `
    SELECT a.university, MIN(a.h_index) AS min_h_index, MAX(a.h_index) AS max_h_index
    FROM authors AS a
    GROUP BY a.university;
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

  connection.query(query3, function (err, results, fields) {
    if (err) {
      console.error("Error executing query 3:", err);
      return;
    }
    console.log("Query 3 Results:");
    console.table(results);
  });

  connection.query(query4, function (err, results, fields) {
    if (err) {
      console.error("Error executing query 4:", err);
      return;
    }
    console.log("Query 4 Results:");
    console.table(results);
  });

  connection.query(query5, function (err, results, fields) {
    if (err) {
      console.error("Error executing query 5:", err);
      return;
    }
    console.log("Query 5 Results:");
    console.table(results);
  });

  connection.end();
});
