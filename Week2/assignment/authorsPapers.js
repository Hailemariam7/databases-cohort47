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

  const createRelationshipTable = `
    CREATE TABLE author_paper_relationship (
      author_id INT,
      paper_id INT,
      FOREIGN KEY (author_id) REFERENCES authors(author_id),
      FOREIGN KEY (paper_id) REFERENCES research_papers(paper_id)
    );
  `;

  // Execute the query to create the relationship table
  connection.query(createRelationshipTable, function (err, results, fields) {
    if (err) {
      console.error("Error creating relationship table:", err);
      return;
    }
    console.log("Relationship table created successfully");
    connection.end();
  });
});
